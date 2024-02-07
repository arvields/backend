import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeoPolygon } from './entities/geo-polygon.entity';
import { CreateGeoPolygonDto } from './dto/create-geo-polygon.dto';
import { parse } from 'wellknown';
import shp from 'shpjs';

@Injectable()
export class GeoPolygonService {
  constructor(
    @InjectRepository(GeoPolygon)
    private readonly geoPolygonRepository: Repository<GeoPolygon>,
  ) { }

  async create(createGeoPolygonDto: CreateGeoPolygonDto): Promise<GeoPolygon> {
    const geoPolygon = new GeoPolygon();
    const wkt = createGeoPolygonDto.geometry;
    const geoJson = this.convertWKTToGeoJSON(wkt);
    if (!geoJson) {
      throw new BadRequestException('Invalid WKT geometry');
    }
    geoPolygon.geometry = geoJson;
    return this.geoPolygonRepository.save(geoPolygon);
  }

  async uploadShapefile(fileBuffer: Buffer): Promise<void> {
    try {
      const geojson = await shp(fileBuffer);

      const connection = this.geoPolygonRepository.manager.connection;

      if (Array.isArray(geojson)) {
        for (const featureCollection of geojson) {
          for (const feature of featureCollection.features) {
            const sqlQuery = this.generatePostGISQuery(feature.geometry);
            await connection.query(sqlQuery);
          }
        }
      } else {
        for (const feature of geojson.features) {
          const sqlQuery = this.generatePostGISQuery(feature.geometry);
          await connection.query(sqlQuery);
        }
      }
    } catch (error) {
      console.error('Error processing shapefile:', error);
      throw error;
    }
  }

  private generatePostGISQuery(geometry: any): string {
    const placeholderGeometry = JSON.stringify(geometry);
    return `INSERT INTO geo_polygon (geometry) VALUES (ST_SetSRID(ST_GeomFromGeoJSON(${placeholderGeometry}),  4326));`;
  }

  private convertWKTToGeoJSON(wkt: any): object | null {
    if (!wkt) {
      console.error('WKT string is undefined or empty');
      return null;
    }
    try {
      return parse(wkt);
    } catch (error) {
      console.error(`Failed to parse WKT: ${error.message}`);
      throw new BadRequestException(`Invalid WKT geometry: ${error.message}`);
    }
  }
}
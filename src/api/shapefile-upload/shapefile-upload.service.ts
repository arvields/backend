import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import shp from 'shpjs';
import { promises as fsPromises } from 'fs';
import { ShapefileData } from './entities/shapefile-upload.entity';

@Injectable()
export class ShapefileUploadService {
  constructor(
    @InjectRepository(ShapefileData)
    private readonly shapefileDataRepository: Repository<ShapefileData>,
  ) { }

  async processShapefile(filePath: string): Promise<void> {
    try {
      // Read the shapefile data as an ArrayBuffer
      const data = await fsPromises.readFile(filePath);
      const arrayBuffer = Uint8Array.from(data).buffer;

      // Parse the shapefile data with shpjs
      const shapefileData = await shp(arrayBuffer);

      if (Array.isArray(shapefileData)) {
        for (const featureCollection of shapefileData) {
          for (const feature of featureCollection.features) {
            const wktGeometry = JSON.stringify(feature.geometry);
            const entityInstance = new ShapefileData();
            entityInstance.geometry = wktGeometry;

            await this.shapefileDataRepository.save(entityInstance);
          }
        }
      } else {
        for (const feature of shapefileData.features) {
          const wktGeometry = JSON.stringify(feature.geometry);
          const entityInstance = new ShapefileData();
          entityInstance.geometry = wktGeometry;

          await this.shapefileDataRepository.save(entityInstance);
        }
      }
    } catch (error) {
      console.error('Error processing shapefile:', error);
    }
  }
}
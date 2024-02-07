/// <reference types="node" />
import { Repository } from 'typeorm';
import { GeoPolygon } from './entities/geo-polygon.entity';
import { CreateGeoPolygonDto } from './dto/create-geo-polygon.dto';
export declare class GeoPolygonService {
    private readonly geoPolygonRepository;
    constructor(geoPolygonRepository: Repository<GeoPolygon>);
    create(createGeoPolygonDto: CreateGeoPolygonDto): Promise<GeoPolygon>;
    uploadShapefile(fileBuffer: Buffer): Promise<void>;
    private generatePostGISQuery;
    private convertWKTToGeoJSON;
}

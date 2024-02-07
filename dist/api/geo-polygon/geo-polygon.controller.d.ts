/// <reference types="multer" />
import { GeoPolygonService } from './geo-polygon.service';
import { CreateGeoPolygonDto } from './dto/create-geo-polygon.dto';
import { GeoPolygon } from './entities/geo-polygon.entity';
export declare class GeoPolygonController {
    private readonly geoPolygonService;
    constructor(geoPolygonService: GeoPolygonService);
    create(createGeoPolygonDto: CreateGeoPolygonDto): Promise<GeoPolygon>;
    uploadShapefile(file: Express.Multer.File): Promise<void>;
}

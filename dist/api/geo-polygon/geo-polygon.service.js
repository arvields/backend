"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoPolygonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const geo_polygon_entity_1 = require("./entities/geo-polygon.entity");
const wellknown_1 = require("wellknown");
const shpjs_1 = require("shpjs");
let GeoPolygonService = class GeoPolygonService {
    constructor(geoPolygonRepository) {
        this.geoPolygonRepository = geoPolygonRepository;
    }
    async create(createGeoPolygonDto) {
        const geoPolygon = new geo_polygon_entity_1.GeoPolygon();
        const wkt = createGeoPolygonDto.geometry;
        const geoJson = this.convertWKTToGeoJSON(wkt);
        if (!geoJson) {
            throw new common_1.BadRequestException('Invalid WKT geometry');
        }
        geoPolygon.geometry = geoJson;
        return this.geoPolygonRepository.save(geoPolygon);
    }
    async uploadShapefile(fileBuffer) {
        try {
            const geojson = await (0, shpjs_1.default)(fileBuffer);
            const connection = this.geoPolygonRepository.manager.connection;
            if (Array.isArray(geojson)) {
                for (const featureCollection of geojson) {
                    for (const feature of featureCollection.features) {
                        const sqlQuery = this.generatePostGISQuery(feature.geometry);
                        await connection.query(sqlQuery);
                    }
                }
            }
            else {
                for (const feature of geojson.features) {
                    const sqlQuery = this.generatePostGISQuery(feature.geometry);
                    await connection.query(sqlQuery);
                }
            }
        }
        catch (error) {
            console.error('Error processing shapefile:', error);
            throw error;
        }
    }
    generatePostGISQuery(geometry) {
        const placeholderGeometry = JSON.stringify(geometry);
        return `INSERT INTO geo_polygon (geometry) VALUES (ST_SetSRID(ST_GeomFromGeoJSON(${placeholderGeometry}),  4326));`;
    }
    convertWKTToGeoJSON(wkt) {
        if (!wkt) {
            console.error('WKT string is undefined or empty');
            return null;
        }
        try {
            return (0, wellknown_1.parse)(wkt);
        }
        catch (error) {
            console.error(`Failed to parse WKT: ${error.message}`);
            throw new common_1.BadRequestException(`Invalid WKT geometry: ${error.message}`);
        }
    }
};
GeoPolygonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(geo_polygon_entity_1.GeoPolygon)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GeoPolygonService);
exports.GeoPolygonService = GeoPolygonService;
//# sourceMappingURL=geo-polygon.service.js.map
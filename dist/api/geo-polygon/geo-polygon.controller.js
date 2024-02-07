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
exports.GeoPolygonController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const geo_polygon_service_1 = require("./geo-polygon.service");
const create_geo_polygon_dto_1 = require("./dto/create-geo-polygon.dto");
let GeoPolygonController = class GeoPolygonController {
    constructor(geoPolygonService) {
        this.geoPolygonService = geoPolygonService;
    }
    async create(createGeoPolygonDto) {
        return this.geoPolygonService.create(createGeoPolygonDto);
    }
    async uploadShapefile(file) {
        if (!file || !file.buffer) {
            throw new common_1.BadRequestException('No file was uploaded');
        }
        await this.geoPolygonService.uploadShapefile(file.buffer);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_geo_polygon_dto_1.CreateGeoPolygonDto]),
    __metadata("design:returntype", Promise)
], GeoPolygonController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GeoPolygonController.prototype, "uploadShapefile", null);
GeoPolygonController = __decorate([
    (0, common_1.Controller)('geo-polygon'),
    __metadata("design:paramtypes", [geo_polygon_service_1.GeoPolygonService])
], GeoPolygonController);
exports.GeoPolygonController = GeoPolygonController;
//# sourceMappingURL=geo-polygon.controller.js.map
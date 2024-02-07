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
exports.ShapefileUploadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const shpjs_1 = require("shpjs");
const fs_1 = require("fs");
const shapefile_upload_entity_1 = require("./entities/shapefile-upload.entity");
let ShapefileUploadService = class ShapefileUploadService {
    constructor(shapefileDataRepository) {
        this.shapefileDataRepository = shapefileDataRepository;
    }
    async processShapefile(filePath) {
        try {
            const data = await fs_1.promises.readFile(filePath);
            const arrayBuffer = Uint8Array.from(data).buffer;
            const shapefileData = await (0, shpjs_1.default)(arrayBuffer);
            if (Array.isArray(shapefileData)) {
                for (const featureCollection of shapefileData) {
                    for (const feature of featureCollection.features) {
                        const wktGeometry = JSON.stringify(feature.geometry);
                        const entityInstance = new shapefile_upload_entity_1.ShapefileData();
                        entityInstance.geometry = wktGeometry;
                        await this.shapefileDataRepository.save(entityInstance);
                    }
                }
            }
            else {
                for (const feature of shapefileData.features) {
                    const wktGeometry = JSON.stringify(feature.geometry);
                    const entityInstance = new shapefile_upload_entity_1.ShapefileData();
                    entityInstance.geometry = wktGeometry;
                    await this.shapefileDataRepository.save(entityInstance);
                }
            }
        }
        catch (error) {
            console.error('Error processing shapefile:', error);
        }
    }
};
ShapefileUploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shapefile_upload_entity_1.ShapefileData)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ShapefileUploadService);
exports.ShapefileUploadService = ShapefileUploadService;
//# sourceMappingURL=shapefile-upload.service.js.map
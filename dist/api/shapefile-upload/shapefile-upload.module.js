"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapefileUploadModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shapefile_upload_service_1 = require("./shapefile-upload.service");
const shapefile_upload_entity_1 = require("./entities/shapefile-upload.entity");
const shapefile_upload_controller_1 = require("./shapefile-upload.controller");
let ShapefileUploadModule = class ShapefileUploadModule {
};
ShapefileUploadModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([shapefile_upload_entity_1.ShapefileData])],
        providers: [shapefile_upload_service_1.ShapefileUploadService],
        controllers: [shapefile_upload_controller_1.ShapefileUploadController],
    })
], ShapefileUploadModule);
exports.ShapefileUploadModule = ShapefileUploadModule;
//# sourceMappingURL=shapefile-upload.module.js.map
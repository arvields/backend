"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const pets_entity_1 = require("./api/pets/data/pets.entity");
const pets_module_1 = require("./api/pets/pets.module");
const owner_entity_1 = require("./api/owner/data/owner.entity");
const owner_module_1 = require("./api/owner/owner.module");
const geo_polygon_module_1 = require("./api/geo-polygon/geo-polygon.module");
const geo_polygon_entity_1 = require("./api/geo-polygon/entities/geo-polygon.entity");
const shapefile_upload_module_1 = require("./api/shapefile-upload/shapefile-upload.module");
const shapefile_upload_entity_1 = require("./api/shapefile-upload/entities/shapefile-upload.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12131989',
                database: 'wdGIS',
                entities: [pets_entity_1.Pets, owner_entity_1.Owner, geo_polygon_entity_1.GeoPolygon, shapefile_upload_entity_1.ShapefileData],
                synchronize: true,
                logging: true,
            }),
            pets_module_1.PetsModule,
            owner_module_1.OwnerModule,
            geo_polygon_module_1.GeoPolygonModule,
            shapefile_upload_module_1.ShapefileUploadModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
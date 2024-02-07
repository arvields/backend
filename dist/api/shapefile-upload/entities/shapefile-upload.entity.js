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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapefileData = void 0;
const typeorm_1 = require("typeorm");
let ShapefileData = class ShapefileData {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ShapefileData.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'geometry', srid: 4326 }),
    __metadata("design:type", Object)
], ShapefileData.prototype, "geometry", void 0);
ShapefileData = __decorate([
    (0, typeorm_1.Entity)('shapefile_data')
], ShapefileData);
exports.ShapefileData = ShapefileData;
//# sourceMappingURL=shapefile-upload.entity.js.map
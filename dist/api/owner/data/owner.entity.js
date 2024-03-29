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
exports.Owner = void 0;
const pets_entity_1 = require("../../pets/data/pets.entity");
const typeorm_1 = require("typeorm");
let Owner = class Owner {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: 'owner_id' }),
    __metadata("design:type", String)
], Owner.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'owner_name' }),
    __metadata("design:type", String)
], Owner.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'pet_id_fk' }),
    (0, typeorm_1.ManyToOne)(() => pets_entity_1.Pets, (pet) => pet.id),
    __metadata("design:type", pets_entity_1.Pets)
], Owner.prototype, "petId", void 0);
Owner = __decorate([
    (0, typeorm_1.Entity)({ name: 'owner' })
], Owner);
exports.Owner = Owner;
//# sourceMappingURL=owner.entity.js.map
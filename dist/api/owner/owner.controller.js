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
exports.OwnerController = void 0;
const common_1 = require("@nestjs/common");
const owner_service_1 = require("./owner.service");
const owner_dto_1 = require("./data/owner.dto");
let OwnerController = class OwnerController {
    constructor(ownerService) {
        this.ownerService = ownerService;
    }
    async testFunction() {
        return await this.ownerService.getAllOwner();
    }
    async createOwner(ownerDto) {
        return await this.ownerService.createOwner(ownerDto);
    }
    async updateOwnerInformation(ownerId, ownerUpdateDto) {
        return await this.ownerService.updateOwnerInformation(ownerUpdateDto, ownerId);
    }
    async deleteOwner(id) {
        return await this.ownerService.deleteOwner(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "testFunction", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [owner_dto_1.OwnerDto]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "createOwner", null);
__decorate([
    (0, common_1.Put)(':owner_id'),
    __param(0, (0, common_1.Param)('owner_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, owner_dto_1.OwnerUpdateDto]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "updateOwnerInformation", null);
__decorate([
    (0, common_1.Delete)(':owner_id'),
    __param(0, (0, common_1.Param)('owner_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "deleteOwner", null);
OwnerController = __decorate([
    (0, common_1.Controller)('owner'),
    __metadata("design:paramtypes", [owner_service_1.OwnerService])
], OwnerController);
exports.OwnerController = OwnerController;
//# sourceMappingURL=owner.controller.js.map
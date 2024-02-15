"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoServerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let GeoServerService = class GeoServerService {
    constructor() {
        this.baseUrl = 'http://localhost:8080/geoserver';
        this.username = 'admin';
        this.password = 'geoserver';
    }
    async getLayerFeatures(layerName) {
        const cleanBaseUrl = this.baseUrl.endsWith('/') ? this.baseUrl.slice(0, -1) : this.baseUrl;
        const url = `${cleanBaseUrl}/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=${layerName}&outputFormat=application/json`;
        const response = await axios_1.default.get(url, {
            auth: {
                username: this.username,
                password: this.password,
            },
        });
        return response.data;
    }
};
GeoServerService = __decorate([
    (0, common_1.Injectable)()
], GeoServerService);
exports.GeoServerService = GeoServerService;
//# sourceMappingURL=geoserver.service.js.map
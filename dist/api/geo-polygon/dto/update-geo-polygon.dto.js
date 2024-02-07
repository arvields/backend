"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGeoPolygonDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_geo_polygon_dto_1 = require("./create-geo-polygon.dto");
class UpdateGeoPolygonDto extends (0, mapped_types_1.PartialType)(create_geo_polygon_dto_1.CreateGeoPolygonDto) {
}
exports.UpdateGeoPolygonDto = UpdateGeoPolygonDto;
//# sourceMappingURL=update-geo-polygon.dto.js.map
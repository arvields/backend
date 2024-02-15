"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGeoserverDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_geoserver_dto_1 = require("./create-geoserver.dto");
class UpdateGeoserverDto extends (0, mapped_types_1.PartialType)(create_geoserver_dto_1.CreateGeoserverDto) {
}
exports.UpdateGeoserverDto = UpdateGeoserverDto;
//# sourceMappingURL=update-geoserver.dto.js.map
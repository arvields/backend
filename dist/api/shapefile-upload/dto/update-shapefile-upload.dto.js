"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShapefileUploadDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_shapefile_upload_dto_1 = require("./create-shapefile-upload.dto");
class UpdateShapefileUploadDto extends (0, mapped_types_1.PartialType)(create_shapefile_upload_dto_1.CreateShapefileUploadDto) {
}
exports.UpdateShapefileUploadDto = UpdateShapefileUploadDto;
//# sourceMappingURL=update-shapefile-upload.dto.js.map
import { PartialType } from '@nestjs/mapped-types';
import { CreateShapefileUploadDto } from './create-shapefile-upload.dto';

export class UpdateShapefileUploadDto extends PartialType(CreateShapefileUploadDto) {}

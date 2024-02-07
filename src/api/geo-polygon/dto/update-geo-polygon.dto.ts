import { PartialType } from '@nestjs/mapped-types';
import { CreateGeoPolygonDto } from './create-geo-polygon.dto';

export class UpdateGeoPolygonDto extends PartialType(CreateGeoPolygonDto) {}

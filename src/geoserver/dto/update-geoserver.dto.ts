import { PartialType } from '@nestjs/mapped-types';
import { CreateGeoserverDto } from './create-geoserver.dto';

export class UpdateGeoserverDto extends PartialType(CreateGeoserverDto) {}

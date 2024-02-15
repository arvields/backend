import { Module } from '@nestjs/common';
import { GeoServerService } from './geoserver.service';
import { GeoServerController } from './geoserver.controller';

@Module({
  controllers: [GeoServerController],
  providers: [GeoServerService]
})
export class GeoserverModule { }

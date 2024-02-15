import { Controller, Get, Param } from '@nestjs/common';
import { GeoServerService } from './geoserver.service';

@Controller('geoserver')
export class GeoServerController {
  constructor(private readonly geoServerService: GeoServerService) { }

  @Get('/layers/:layerName')
  async getLayerData(@Param('layerName') layerName: string) {
    return await this.geoServerService.getLayerFeatures(layerName);
  }
}
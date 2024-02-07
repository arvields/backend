import { Controller, Post, Body, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { GeoPolygonService } from './geo-polygon.service';
import { CreateGeoPolygonDto } from './dto/create-geo-polygon.dto';
import { GeoPolygon } from './entities/geo-polygon.entity';

@Controller('geo-polygon')
export class GeoPolygonController {
  constructor(private readonly geoPolygonService: GeoPolygonService) { }

  @Post()
  async create(@Body() createGeoPolygonDto: CreateGeoPolygonDto): Promise<GeoPolygon> {
    return this.geoPolygonService.create(createGeoPolygonDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadShapefile(@UploadedFile() file: Express.Multer.File): Promise<void> {
    if (!file || !file.buffer) {
      throw new BadRequestException('No file was uploaded');
    }
    await this.geoPolygonService.uploadShapefile(file.buffer);
  }
}
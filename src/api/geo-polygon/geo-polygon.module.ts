import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeoPolygon } from './entities/geo-polygon.entity';
import { GeoPolygonService } from './geo-polygon.service';
import { GeoPolygonController } from './geo-polygon.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GeoPolygon])],
  providers: [GeoPolygonService],
  controllers: [GeoPolygonController],
})
export class GeoPolygonModule { }
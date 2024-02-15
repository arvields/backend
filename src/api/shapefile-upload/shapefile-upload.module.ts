import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShapefileUploadService } from './shapefile-upload.service';
import { ShapefileData } from './entities/shapefile-upload.entity';
import { ShapefileUploadController } from './shapefile-upload.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ShapefileData])],
  providers: [ShapefileUploadService],
  controllers: [ShapefileUploadController],
})
export class ShapefileUploadModule { }
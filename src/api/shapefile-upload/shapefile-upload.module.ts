import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShapefileUploadService } from './shapefile-upload.service';
import { ShapefileData } from './entities/shapefile-upload.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShapefileData])],
  providers: [ShapefileUploadService],
  exports: [ShapefileUploadService],
})
export class ShapefileUploadModule { }
import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ShapefileUploadService } from './shapefile-upload.service';

@Controller('shapefile-upload')
export class ShapefileUploadController {
  constructor(private readonly shapefileUploadService: ShapefileUploadService) { }

  @Get()
  getMessage() {
    return {
      message: 'Upload here',
    };
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    await this.shapefileUploadService.processShapefile(file.path);
    return {
      message: 'Shapefile processed and data inserted into the database',
      fileName: file.filename,
    };
  }
}
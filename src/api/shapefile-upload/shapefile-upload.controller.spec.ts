import { Test, TestingModule } from '@nestjs/testing';
import { ShapefileUploadController } from './shapefile-upload.controller';
import { ShapefileUploadService } from './shapefile-upload.service';

describe('ShapefileUploadController', () => {
  let controller: ShapefileUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShapefileUploadController],
      providers: [ShapefileUploadService],
    }).compile();

    controller = module.get<ShapefileUploadController>(ShapefileUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

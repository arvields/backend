import { Test, TestingModule } from '@nestjs/testing';
import { ShapefileUploadService } from './shapefile-upload.service';

describe('ShapefileUploadService', () => {
  let service: ShapefileUploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShapefileUploadService],
    }).compile();

    service = module.get<ShapefileUploadService>(ShapefileUploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { GeoPolygonService } from './geo-polygon.service';

describe('GeoPolygonService', () => {
  let service: GeoPolygonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeoPolygonService],
    }).compile();

    service = module.get<GeoPolygonService>(GeoPolygonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

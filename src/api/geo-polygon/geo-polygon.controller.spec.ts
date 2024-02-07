import { Test, TestingModule } from '@nestjs/testing';
import { GeoPolygonController } from './geo-polygon.controller';
import { GeoPolygonService } from './geo-polygon.service';

describe('GeoPolygonController', () => {
  let controller: GeoPolygonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeoPolygonController],
      providers: [GeoPolygonService],
    }).compile();

    controller = module.get<GeoPolygonController>(GeoPolygonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

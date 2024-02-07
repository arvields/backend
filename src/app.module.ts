import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pets } from './api/pets/data/pets.entity';
import { PetsModule } from './api/pets/pets.module';
import { Owner } from './api/owner/data/owner.entity';
import { OwnerModule } from './api/owner/owner.module';
import { GeoPolygonModule } from './api/geo-polygon/geo-polygon.module';
import { GeoPolygon } from './api/geo-polygon/entities/geo-polygon.entity';
import { ShapefileUploadModule } from './api/shapefile-upload/shapefile-upload.module';
import { ShapefileData } from './api/shapefile-upload/entities/shapefile-upload.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12131989',
      database: 'wdGIS',
      entities: [Pets, Owner, GeoPolygon, ShapefileData],
      synchronize: true,
      logging: true,
    }),
    PetsModule,
    OwnerModule,
    GeoPolygonModule,
    ShapefileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

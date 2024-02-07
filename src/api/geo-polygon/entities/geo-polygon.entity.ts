import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GeoPolygon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'geom', type: 'geometry', srid: 4326 })
    geometry: any;
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('shapefile_data')
export class ShapefileData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'geometry', srid: 4326 })
    geometry: any;

}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pets' })
export class Pets {
  @PrimaryGeneratedColumn('increment', { name: 'pet_id' })
  id: number;

  @Column({ name: 'pet_name' })
  name: string;

  @Column({ name: 'pet_type' })
  type: string;
}

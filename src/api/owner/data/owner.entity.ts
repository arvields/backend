import { Pets } from 'src/api/pets/data/pets.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'owner' })
export class Owner {
  @PrimaryGeneratedColumn('increment', { name: 'owner_id' })
  id: string;

  @Column({ name: 'owner_name' })
  name: string;

  @JoinColumn({ name: 'pet_id_fk' })
  @ManyToOne(() => Pets, (pet) => pet.id)
  petId: Pets;
}

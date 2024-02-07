import { Pets } from 'src/api/pets/data/pets.entity';

export class OwnerDto {
  name: string;
  petId: Pets;
}

export class OwnerUpdateDto {
  name: string;
  petId: Pets;
}

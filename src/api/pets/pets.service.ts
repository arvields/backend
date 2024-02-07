import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pets } from './data/pets.entity';
import { Repository } from 'typeorm';
import { PetsDto, PetsUpdateDto } from './data/pets.dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets)
    private readonly petsRepository: Repository<Pets>,
  ) {}

  async getAllPets() {
    return await this.petsRepository.find({
      select: { id: true, name: true, type: true },
    });
  }

  async createPet(petsDto: PetsDto) {
    return await this.petsRepository.save(petsDto);
  }

  async updatePetInformation(petsUpdateDto: PetsUpdateDto) {
    return await this.petsRepository
      .createQueryBuilder()
      .update(petsUpdateDto)
      .where('pet_id = :petId', { petId: petsUpdateDto.id })
      .execute();
  }

  async deletePet(id: string) {
    return await this.petsRepository
      .createQueryBuilder()
      .delete()
      .where('pet_id=:petId', { petId: id })
      .execute();
  }
}

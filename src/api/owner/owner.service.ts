import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OwnerDto, OwnerUpdateDto } from './data/owner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './data/owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

  async getAllOwner() {
    return await this.ownerRepository.find({
      select: { name: true, petId: { name: true } },
      relations: { petId: true },
    });
  }

  async createOwner(ownerDto: OwnerDto) {
    return await this.ownerRepository.save(ownerDto);
  }

  async updateOwnerInformation(
    ownerUpdateDto: OwnerUpdateDto,
    ownerId: string,
  ) {
    return await this.ownerRepository
      .createQueryBuilder()
      .update(ownerUpdateDto)
      .where('owner_id = :ownerId', { ownerId })
      .execute();
  }

  async deleteOwner(id: string) {
    return await this.ownerRepository
      .createQueryBuilder()
      .delete()
      .where('owner_id=:ownerId', { ownerId: id })
      .execute();
  }
}

import {
  Body,
  Controller,
  Get,
  Put,
  Post,
  Param,
  Delete,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsDto, PetsUpdateDto } from './data/pets.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) { }

  @Get()
  async getAllPets() {
    return await this.petsService.getAllPets();
  }

  @Post()
  async createPet(@Body() petsDto: PetsDto) {
    return await this.petsService.createPet(petsDto);
  }

  @Put()
  async updatePetInformation(@Body() petsUpdateDto: PetsUpdateDto) {
    return await this.petsService.updatePetInformation(petsUpdateDto);
  }

  @Delete(':pet_id')
  async deletePet(@Param('pet_id') id: string) {
    return await this.petsService.deletePet(id);
  }
}

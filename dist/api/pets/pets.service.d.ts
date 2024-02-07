import { Pets } from './data/pets.entity';
import { Repository } from 'typeorm';
import { PetsDto, PetsUpdateDto } from './data/pets.dto';
export declare class PetsService {
    private readonly petsRepository;
    constructor(petsRepository: Repository<Pets>);
    getAllPets(): Promise<Pets[]>;
    createPet(petsDto: PetsDto): Promise<PetsDto & Pets>;
    updatePetInformation(petsUpdateDto: PetsUpdateDto): Promise<import("typeorm").UpdateResult>;
    deletePet(id: string): Promise<import("typeorm").DeleteResult>;
}

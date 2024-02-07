import { PetsService } from './pets.service';
import { PetsDto, PetsUpdateDto } from './data/pets.dto';
export declare class PetsController {
    private readonly petsService;
    constructor(petsService: PetsService);
    getAllPets(): Promise<import("./data/pets.entity").Pets[]>;
    createPet(petsDto: PetsDto): Promise<PetsDto & import("./data/pets.entity").Pets>;
    updatePetInformation(petsUpdateDto: PetsUpdateDto): Promise<import("typeorm").UpdateResult>;
    deletePet(id: string): Promise<import("typeorm").DeleteResult>;
}

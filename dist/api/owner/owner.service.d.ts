import { Repository } from 'typeorm';
import { OwnerDto, OwnerUpdateDto } from './data/owner.dto';
import { Owner } from './data/owner.entity';
export declare class OwnerService {
    private readonly ownerRepository;
    constructor(ownerRepository: Repository<Owner>);
    getAllOwner(): Promise<Owner[]>;
    createOwner(ownerDto: OwnerDto): Promise<OwnerDto & Owner>;
    updateOwnerInformation(ownerUpdateDto: OwnerUpdateDto, ownerId: string): Promise<import("typeorm").UpdateResult>;
    deleteOwner(id: string): Promise<import("typeorm").DeleteResult>;
}

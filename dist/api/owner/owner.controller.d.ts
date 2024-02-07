import { OwnerService } from './owner.service';
import { OwnerDto, OwnerUpdateDto } from './data/owner.dto';
export declare class OwnerController {
    private readonly ownerService;
    constructor(ownerService: OwnerService);
    testFunction(): Promise<import("./data/owner.entity").Owner[]>;
    createOwner(ownerDto: OwnerDto): Promise<OwnerDto & import("./data/owner.entity").Owner>;
    updateOwnerInformation(ownerId: string, ownerUpdateDto: OwnerUpdateDto): Promise<import("typeorm").UpdateResult>;
    deleteOwner(id: string): Promise<import("typeorm").DeleteResult>;
}

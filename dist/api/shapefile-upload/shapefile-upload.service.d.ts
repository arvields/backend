import { Repository } from 'typeorm';
import { ShapefileData } from './entities/shapefile-upload.entity';
export declare class ShapefileUploadService {
    private readonly shapefileDataRepository;
    constructor(shapefileDataRepository: Repository<ShapefileData>);
    processShapefile(filePath: string): Promise<void>;
}

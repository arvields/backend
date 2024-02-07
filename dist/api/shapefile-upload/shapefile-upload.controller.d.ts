import { ShapefileUploadService } from './shapefile-upload.service';
export declare class ShapefileUploadController {
    private readonly shapefileUploadService;
    constructor(shapefileUploadService: ShapefileUploadService);
    getMessage(): {
        message: string;
    };
    uploadFile(file: any): Promise<{
        message: string;
        fileName: any;
    }>;
}

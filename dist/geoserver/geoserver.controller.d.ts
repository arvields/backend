import { GeoServerService } from './geoserver.service';
export declare class GeoServerController {
    private readonly geoServerService;
    constructor(geoServerService: GeoServerService);
    getLayerData(layerName: string): Promise<any>;
}

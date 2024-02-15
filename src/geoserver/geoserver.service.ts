import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GeoServerService {
  private readonly baseUrl = 'http://localhost:8080/geoserver';
  private readonly username = 'admin';
  private readonly password = 'geoserver';

  async getLayerFeatures(layerName: string): Promise<any> {
    // Remove the trailing slash from baseUrl if present
    const cleanBaseUrl = this.baseUrl.endsWith('/') ? this.baseUrl.slice(0, -1) : this.baseUrl;
    const url = `${cleanBaseUrl}/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=${layerName}&outputFormat=application/json`;
    const response = await axios.get(url, {
      auth: {
        username: this.username,
        password: this.password,
      },
    });
    return response.data;
  }
}
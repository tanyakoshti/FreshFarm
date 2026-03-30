import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MapboxService {
  async getEtaAndPolyline(origin: string, destination: string) {
    const token = process.env.MAPBOX_TOKEN!;
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${origin};${destination}`;
    const { data } = await axios.get(url, {
      params: { access_token: token, geometries: 'polyline', overview: 'full' },
    });

    const route = data.routes?.[0];
    return {
      etaMinutes: route?.duration ? Math.ceil(route.duration / 60) : null,
      polyline: route?.geometry || null,
    };
  }
}
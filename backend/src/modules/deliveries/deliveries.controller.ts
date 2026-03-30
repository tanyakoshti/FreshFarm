import { Controller, Get, Query } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { MapboxService } from './mapbox.service';

@Controller('deliveries')
export class DeliveriesController {
  constructor(private deliveries: DeliveriesService, private mapbox: MapboxService) {}

  @Get()
  list() {
    return this.deliveries.list();
  }

  @Get('route-mapbox')
  async route(@Query('origin') origin: string, @Query('destination') destination: string) {
    return this.mapbox.getEtaAndPolyline(origin, destination);
  }
}
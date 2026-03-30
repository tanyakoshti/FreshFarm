import { Module } from '@nestjs/common';
import { DeliveriesController } from './deliveries.controller';
import { DeliveriesService } from './deliveries.service';
import { DirectionsService } from './directions.service';
import { EtaService } from './eta.service';
import { IdleService } from './idle.service';
import { ShareService } from './share.service';
import { MapboxService } from './mapbox.service';
import { EtaHistoryService } from './eta-history.service';
import { GeofenceService } from './geofence.service';
import { LiveGateway } from './live.gateway';
import { PrismaService } from '../../services/prisma.service';

@Module({
  controllers: [DeliveriesController],
  providers: [
    DeliveriesService,
    DirectionsService,
    EtaService,
    IdleService,
    ShareService,
    MapboxService,
    EtaHistoryService,
    GeofenceService,
    LiveGateway,
    PrismaService,
  ],
})
export class DeliveriesModule {}
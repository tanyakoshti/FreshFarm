import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  track(event: string, meta?: any, userId?: string) {
    return this.prisma.analyticsEvent.create({
      data: { event, meta, userId },
    });
  }

  async summary() {
    const orders = await this.prisma.order.count();
    const users = await this.prisma.user.count();
    const events = await this.prisma.analyticsEvent.count();
    return { orders, users, events };
  }
}
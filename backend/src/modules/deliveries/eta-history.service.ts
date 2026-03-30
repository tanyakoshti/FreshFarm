import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class EtaHistoryService {
  constructor(private prisma: PrismaService) {}

  record(orderId: string, etaMinutes: number) {
    return this.prisma.etaHistory.create({ data: { orderId, etaMinutes } });
  }

  getHistory(orderId: string) {
    return this.prisma.etaHistory.findMany({ where: { orderId }, orderBy: { createdAt: 'desc' } });
  }
}
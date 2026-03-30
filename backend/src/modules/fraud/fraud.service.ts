import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class FraudService {
  constructor(private prisma: PrismaService) {}

  async getFraudReport() {
    return this.prisma.fraudFlag.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async createAlert(type: string, message: string) {
    return this.prisma.alert.create({ data: { type, message, severity: 'HIGH' } });
  }

  async scoreUser(_userId: string) {
    return 0;
  }
}
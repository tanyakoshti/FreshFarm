import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class DeliveriesService {
  constructor(private prisma: PrismaService) {}
  list() {
    return this.prisma.delivery.findMany();
  }
}
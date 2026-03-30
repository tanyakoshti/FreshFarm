import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  list() {
    return this.prisma.order.findMany();
  }
}
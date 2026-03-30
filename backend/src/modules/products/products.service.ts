import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  list() {
    return this.prisma.product.findMany();
  }
}
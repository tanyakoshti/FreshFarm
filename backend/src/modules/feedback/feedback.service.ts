import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}
  create(data: any) {
    return this.prisma.feedback.create({ data });
  }
}
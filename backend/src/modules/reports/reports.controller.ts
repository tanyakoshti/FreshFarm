import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../../common/guards/jwt.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { PrismaService } from '../../services/prisma.service';

@Controller('reports')
export class ReportsController {
  constructor(private prisma: PrismaService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('kpis')
  async kpis() {
    return { delivered: 0, active: 0, avgDeliveryMins: 0, daily: [] };
  }
}
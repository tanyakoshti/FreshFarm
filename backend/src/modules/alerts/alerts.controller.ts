import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../../common/guards/jwt.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { PrismaService } from '../../services/prisma.service';

@Controller('alerts')
export class AlertsController {
  constructor(private prisma: PrismaService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  list() {
    return this.prisma.alert.findMany({ orderBy: { createdAt: 'desc' } });
  }
}
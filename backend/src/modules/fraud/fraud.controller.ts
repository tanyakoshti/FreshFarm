import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../../common/guards/jwt.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { FraudService } from './fraud.service';

@Controller('fraud')
export class FraudController {
  constructor(private fraud: FraudService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('report')
  report() {
    return this.fraud.getFraudReport();
  }
}
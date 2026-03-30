import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private payments: PaymentsService) {}

  @Post('init')
  init(@Body() body: any) {
    return this.payments.init(body);
  }
}
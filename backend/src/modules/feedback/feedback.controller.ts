import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../../common/guards/jwt.guard';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly fb: FeedbackService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() body: any) {
    return this.fb.create(body);
  }
}
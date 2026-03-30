import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('login')
  login(@Body() body: any) {
    return this.auth.login(body);
  }

  @Post('otp')
  requestOtp(@Body() body: any) {
    return this.auth.requestOtp(body);
  }
}
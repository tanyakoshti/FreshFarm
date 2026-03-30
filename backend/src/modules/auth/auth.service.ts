import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(payload: any) {
    return { ok: true, payload };
  }

  requestOtp(payload: any) {
    return { ok: true, payload };
  }
}
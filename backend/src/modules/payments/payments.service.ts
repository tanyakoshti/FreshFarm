import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  init(payload: any) {
    return { ok: true, payload };
  }
}
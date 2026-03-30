import { Injectable } from '@nestjs/common';

@Injectable()
export class PushService {
  async send(to: string, title: string, body: string) {
    return { ok: true, to, title, body };
  }
}
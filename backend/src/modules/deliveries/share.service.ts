import { Injectable } from '@nestjs/common';

@Injectable()
export class ShareService {
  createShareLink(orderId: string) {
    return { url: `https://example.com/share/${orderId}` };
  }
}
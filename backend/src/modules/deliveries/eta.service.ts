import { Injectable } from '@nestjs/common';

@Injectable()
export class EtaService {
  getEta() {
    return { etaMinutes: 0 };
  }
}
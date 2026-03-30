import { Injectable } from '@nestjs/common';

@Injectable()
export class IdleService {
  checkIdle() {
    return { idle: false };
  }
}
import { Injectable } from '@nestjs/common';

@Injectable()
export class DirectionsService {
  getDirections() {
    return { ok: true };
  }
}
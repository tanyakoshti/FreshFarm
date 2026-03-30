import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class LiveGateway {
  @WebSocketServer()
  server!: Server;

  emitLocation(payload: any) {
    this.server.emit('location', payload);
  }
}
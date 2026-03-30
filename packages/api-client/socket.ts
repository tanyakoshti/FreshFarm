import { io, Socket } from 'socket.io-client';

export function createSocket(url: string): Socket {
  return io(url);
}
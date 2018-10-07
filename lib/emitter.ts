import { Listener } from './types';
import { WebSocket } from './uws/client';

export class EventEmitter {
  private events: { [key: string]: Listener } = {};

  public on(event: string, listener: Listener): void {
    if ({}.toString.call(listener) !== '[object Function]')
      return console.log('Listener should be a function');
    this.events[event] = listener;
  }

  public emit(event: string, ...args: any[]): void {
    const listener: Listener = this.events[event];
    listener && listener(...args);
  }

  public removeEvents(): void {
    this.events = {};
  }
}
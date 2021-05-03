import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  messages: string[] = [];

//agrega al cache
  add(message: string) {
    this.messages.push(message);
  }

//limpia el cache
  clear() {
    this.messages = [];
  }

  constructor() { }

}
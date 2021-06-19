import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  Success(msg: string): void {
    alertify.success(msg);
  }

  Message(msg: string): void {
    alertify.message(msg);
  }

  Warning(msg: string): void {
    alertify.warning(msg);
  }

  Error(msg: string): void {
    alertify.error(msg);
  }
}

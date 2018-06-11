import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  _total = 0;
  get total() {
    return this._total;
  }
  set total(value) {
    this._total = value;
  }

  constructor() { }

  method1() {
    return 1;
  }

  add() {
    ++this.total;
  }
}

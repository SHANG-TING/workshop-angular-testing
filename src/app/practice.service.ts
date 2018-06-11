import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  _totalCount = 0;
  get totalCount() {
    return this._totalCount;
  }
  set totalCount(value) {
    this._totalCount = value;
  }

  constructor(private dataService: DataService) { }

  sum(a: number, b: number) {
    return a + b;
  }

  add() {
    ++this.totalCount;
  }

  multliple(a, b) {
    return a * b;
  }

  getData() {
    return this.dataService.method1();
  }
}


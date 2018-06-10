import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  totalCount = 0;

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
    return 1;
  }
}

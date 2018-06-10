import { TestBed, inject } from '@angular/core/testing';

import { PracticeService } from './practice.service';
import { DataService } from './data.service';

describe('PracticeService', () => {
  let service: PracticeService;
  const dataService = {
    method1: () => {}
  } as DataService;
  const dataServiceSpy = jasmine.createSpyObj('DataService', ['method1']);

  beforeEach(() => {
    service = new PracticeService(dataService);
  });

  it('should sum two number', () => {
    expect(service.sum(1, 2)).toBe(3);
  });

  it('每次按 add，總計數會增加1', () => {
    service.add();
    expect(service.totalCount).toBe(1);
  });

  it('should multiple', () => {
    expect(service.multliple(1, 2)).toBe(2);
  });

  it('call dataService method1', () => {
    // mock obj
    spyOn(dataService, 'method1').and.returnValue(3);

    // use createSpyObj
    dataServiceSpy.method1.and.returnValue(1);

    expect(service.getData()).toBe(1);
  });

});

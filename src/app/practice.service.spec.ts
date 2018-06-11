import { TestBed, inject } from '@angular/core/testing';

import { PracticeService } from './practice.service';
import { DataService } from './data.service';

describe('PracticeService', () => {
  const dataServiceMock = {
    method1: () => {
      return 1;
    }
  } as DataService;
  let service: PracticeService;
  let dataService: DataService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PracticeService,
        {
          provide: DataService,
          useValue: dataServiceMock
        }
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(PracticeService);
    dataService = TestBed.get(DataService);
  });


  it('call dataService method1', () => {
    // mock obj
    // spyOn(dataService, 'method1').and.returnValue(1);

    // use createSpyObj
    // dataServiceSpy.method1.and.returnValue(1);

    expect(service.getData()).toBe(1);
  });


  it('can spy on getters', () => {
    spyOnProperty(service, 'totalCount', 'get').and.returnValue(1);
    expect(service.totalCount).toBe(1);
  });

  it('and on setters', () => {
    const spiez = spyOnProperty(service, 'totalCount', 'set');
    service.totalCount = 2;
    expect(spiez).toHaveBeenCalled();
  });

  // let service: PracticeService;
  // const dataService = {
  //   method1: () => {}
  // } as DataService;
  // const dataServiceSpy = jasmine.createSpyObj('DataService', ['method1']);

  // beforeEach(() => {
  //   service = new PracticeService(dataService);
  // });

  // it('should sum two number', () => {
  //   expect(service.sum(1, 2)).toBe(3);
  // });

  // it('每次按 add，總計數會增加1', () => {
  //   service.add();
  //   expect(service.totalCount).toBe(1);
  // });

  // it('should multiple', () => {
  //   expect(service.multliple(1, 2)).toBe(2);
  // });


});

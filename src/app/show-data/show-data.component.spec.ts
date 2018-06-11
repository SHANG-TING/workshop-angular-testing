import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ShowDataComponent } from './show-data.component';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('ShowDataComponent', () => {
  let component: ShowDataComponent;
  let fixture: ComponentFixture<ShowDataComponent>;
  let httpMock: HttpTestingController;
  const httpClientSpyOnject = {
    get: () => {}
  };

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ShowDataComponent],
      imports: [HttpClientTestingModule],
      providers: [
        // { provide: HttpClient, useValue: httpClientSpyOnject }
      ],
      // schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call url api', () => {
    const mockResult = { name: 'Kevin' };
    const expectResult = 'Kevin!!';
    component.getData().subscribe(val => {
      expect(val).toEqual(expectResult);
    });

    const req = httpMock.expectOne({ method: 'GET', url: 'url' });
    // const req = httpController.expectOne('url');
    // expect(req.request.method).toEqual('GET');
    req.flush(mockResult);

    httpMock.verify();
  });

  it('use spyOn', () => {
    const mockResult = { name: 'Kevin' };
    const expectResult = 'Kevin!!';

    spyOn(component['http'], 'get').and.returnValue(of(mockResult));

    component.getData().subscribe(val => {
      expect(component['http'].get).toHaveBeenCalledWith('url');
      expect(val).toEqual(expectResult);
    });
  });

  it('use spyObject', () => {
    // TestingModule-> providers->
    // {provide: HttpClient, useValue: httpClientSpyOnject}

  });

  it('use output something', () => {
    component.go.subscribe(val => {
      expect(val).toBe(true);
    });

    component.somethingClick();
  });

});

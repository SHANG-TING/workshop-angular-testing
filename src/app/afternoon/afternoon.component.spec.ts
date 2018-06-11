import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfternoonComponent } from './afternoon.component';

describe('AfternoonComponent', async() => {
  let component: AfternoonComponent;
  let fixture: ComponentFixture<AfternoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfternoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfternoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', async() => {
    expect(component).toBeTruthy();
  });

  it('message should be ON', async() => {
    component.clicked();
    expect(component.message).toBe('ON');
  });

  it('message should be OFF', async() => {
    expect(component.message).toBe('OFF');
  });
});


describe('處理 DOM', async() => {
  let component: AfternoonComponent;
  let fixture: ComponentFixture<AfternoonComponent>;
  let nativeElement: HTMLElement;
  let spanElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfternoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(AfternoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.debugElement.nativeElement as HTMLElement;
    spanElement = nativeElement.querySelector('span') as HTMLElement;
  });

  it('display should be ON', async() => {
    component.clicked();
    fixture.detectChanges();
    expect(spanElement.innerText).toContain('ON');
  });

  it('display should be OFF', async() => {
    fixture.detectChanges();
    expect(spanElement.innerText).toContain('OFF');
  });

  it('display ON by button click', async() => {
    const buttonElement = nativeElement.querySelector('button') as HTMLElement;

    buttonElement.click();
    fixture.detectChanges();

    expect(component.message).toBe('ON');
    expect(spanElement.innerText).toContain('ON');
  });

  it('display OFF by button click', async() => {
    const buttonElement = nativeElement.querySelector('button') as HTMLElement;

    fixture.detectChanges();
    expect(component.message).toBe('OFF');
    expect(spanElement.innerText).toContain('OFF');
  });

});

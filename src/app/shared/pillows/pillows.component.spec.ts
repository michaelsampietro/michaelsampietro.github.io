import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillowsComponent } from './pillows.component';

describe('PillowsComponent', () => {
  let component: PillowsComponent;
  let fixture: ComponentFixture<PillowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

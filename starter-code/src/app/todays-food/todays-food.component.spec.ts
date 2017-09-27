import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysFoodComponent } from './todays-food.component';

describe('TodaysFoodComponent', () => {
  let component: TodaysFoodComponent;
  let fixture: ComponentFixture<TodaysFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

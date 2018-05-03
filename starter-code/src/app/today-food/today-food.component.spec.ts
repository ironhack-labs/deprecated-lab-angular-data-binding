import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayFoodComponent } from './today-food.component';

describe('TodayFoodComponent', () => {
  let component: TodayFoodComponent;
  let fixture: ComponentFixture<TodayFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

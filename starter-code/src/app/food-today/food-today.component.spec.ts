import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTodayComponent } from './food-today.component';

describe('FoodTodayComponent', () => {
  let component: FoodTodayComponent;
  let fixture: ComponentFixture<FoodTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

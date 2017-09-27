import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddNewFormComponent } from './food-add-new-form.component';

describe('FoodAddNewFormComponent', () => {
  let component: FoodAddNewFormComponent;
  let fixture: ComponentFixture<FoodAddNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAddNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAddNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

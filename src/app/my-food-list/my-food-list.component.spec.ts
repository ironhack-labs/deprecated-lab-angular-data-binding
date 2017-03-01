import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFoodListComponent } from './my-food-list.component';

describe('MyFoodListComponent', () => {
  let component: MyFoodListComponent;
  let fixture: ComponentFixture<MyFoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFoodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

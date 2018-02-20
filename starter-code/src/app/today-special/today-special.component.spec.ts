import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySpecialComponent } from './today-special.component';

describe('TodaySpecialComponent', () => {
  let component: TodaySpecialComponent;
  let fixture: ComponentFixture<TodaySpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaySpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaySpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

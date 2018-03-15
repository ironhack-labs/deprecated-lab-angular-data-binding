import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import foods from '../app/foods';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IronFood';
  foods: Object[];
  selectedFood: Object;

  ngOnInit() {
    this.foods = foods;
  }

  toTodayList(food) {
    this.selectedFood = food;
  }
}

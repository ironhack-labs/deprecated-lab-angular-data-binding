import { Component } from '@angular/core';
import foods from './foods';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  comida = foods;
  title = 'app works!';
  todayFood: Object[] = [];
  totalCalories: number = 0;

  constructor() { }
  addToday(food, quantity) {
    food.quantity += Number(quantity)
    if (this.todayFood.indexOf(food) == -1) {
      this.todayFood.push(food);
    }
    this.totalCalories += food.calories * quantity;

  }

}


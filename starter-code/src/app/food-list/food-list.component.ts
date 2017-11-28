import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foods = foods;
  todayFood: Array<Object> = [];
  totalCalories = 0;

  addTodayList(food) {
    this.todayFood.push(food);
    this.totalCalories += food.calories;
  }
}

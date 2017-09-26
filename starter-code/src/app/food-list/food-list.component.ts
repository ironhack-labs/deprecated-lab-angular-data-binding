import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Object> = foods;
  newFood: Object = {};
  todayFood: Array<Object> = [];
  calories: Number = 0;

  isInputDisabled: Boolean = false;
  toggleForm() {
    this.isInputDisabled = !this.isInputDisabled;
  }

  addFood() {
    this.foods.unshift(this.newFood);
    this.newFood = {};
  }

  addTodayFood(food) {
    this.todayFood.push(food);
    this.calories += food.calories;
  }

  constructor() { }

  ngOnInit() {
  }

}

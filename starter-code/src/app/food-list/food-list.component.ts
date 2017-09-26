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
  calories = 0;
  items: Number = 0;

  isInputDisabled: Boolean = false;
  toggleForm() {
    this.isInputDisabled = !this.isInputDisabled;
  }

  addFood() {
    this.foods.unshift(this.newFood);
    this.newFood = {};
  }

  addTodayFood(food, nFood = 1) {
    food.count = Number(nFood);
    this.todayFood.push(food);
    const cal = food.calories * food.count;
    this.calories += cal;
    this.items += food.count;
  }

  constructor() { }

  ngOnInit() {
  }

}

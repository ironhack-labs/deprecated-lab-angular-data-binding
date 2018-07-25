import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  formEnable: Boolean = false;
  todaysFood: Array<Object> = [];
  foodCalories: number = 0;
  name: string;
  calories: number;
  image: string;
  quantity: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  addFood(food) {
    this.foods.push(food);
  }

  addTodaysFood(food, quantity) {
    if (!this.todaysFood.some(e=>e['name']===food.name))this.todaysFood.push(food);
    this.foodCalories += (food.quantity*food.calories);
  }

  addForm() {
    this.formEnable = !this.formEnable;
  }
}

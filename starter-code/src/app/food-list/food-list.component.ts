import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  todaysFood: Object[] = [];
  form_hidden: boolean = true;
  total_calories = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foodsList;
  }

  handleShowFormAddFood() {
    this.form_hidden = false;
  }

  handleAddFood() {
    this.foods.push(this.newFood);
    this.newFood = {};
    this.form_hidden = true;
  }

  addTodaysFood(food) {
    if (food.quantity < 1) {
      food.quantity = 1;
    }
    this.total_calories += food.calories;
    this.todaysFood.push(food);
  }
}
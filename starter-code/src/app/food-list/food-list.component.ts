import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { Food } from '../interfaces/food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Food>;
  newFood: Food = {
    image: '',
    name: '',
    calories: 0,
  };
  counter: Number;
  todayFoods: Array<Food> = [];
  classForm: String = 'no-active';
  pattern;
  constructor() { }

  ngOnInit() {
    this.foods = foods.reverse();
  }
  showForm() {
    this.classForm = 'active';
  }
  addFood() {
    // add contact to contacts list
    this.foods.unshift(this.newFood);
    this.classForm = 'no-active';
  }
  addFoodList(food: Food) {
    console.log(food)
    this.todayFoods.unshift(food);
    // this.todayFoods.reduce(this.calories);
  }
  removeFoodList(food: Food) {
    this.todayFoods.splice(food[0], 1);
  }
}

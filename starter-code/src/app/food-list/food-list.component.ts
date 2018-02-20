import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import foodsToday from '../today';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  processing = false;
  createForm = false;  
  foods: Object[];
  newFood: Object = {};
  feedbackEnabled = false; 
  foodsToday: Object[];
  newForToday: Object = {};
  todaysCalories: number;

  constructor() { 
    this.todaysCalories = 0;
  }

  ngOnInit() {
  this.foods = foods;
  this.foodsToday = foodsToday;
  }

  create(){
    this.createForm = true;
  }

  addFood(form){
    foods.push(this.newFood);
    this.newFood = {};
    this.createForm = false;
  }

  addToday(food){
    foodsToday.push(food);
    this.newForToday = food;
    this.todaysCalories = this.todaysCalories + food.calories;
    console.log(foodsToday);
    console.log(this.newForToday);
    console.log(food)
  }

}

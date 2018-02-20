import { Component, OnInit } from '@angular/core';
import foods from '../foods';

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
  todaysList: Object[];
  newForToday: Object = {};
  todaysCalories: number;

  constructor() { 
    this.todaysCalories = 0;
  }

  ngOnInit() {
  this.foods = foods;
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
    // this.todaysList.push(food);
    this.todaysCalories = this.todaysCalories + food.calories;
  }

}

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

  constructor() { }

  ngOnInit() {
  this.foods = foods;
  }

  create(){
    this.createForm = true;
  }

  addFood(form){
    console.log("Add contact has been called");
    foods.push(this.newFood);
    this.newFood = {};
    this.createForm = false;
  }

  addToday(food){
    console.log(food)
  }

}

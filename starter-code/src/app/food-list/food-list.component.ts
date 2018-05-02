import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foodList = foods;
  newFood = {};
  showFormBoolean = false;
  showButom = true;
  todayFood = [];
  totalCalories = 0;
  quantity = 1;
  newQuantity = {};

  constructor() {}

  ngOnInit() {}

  showForm() {
    this.showButom = false;
    if (this.showFormBoolean === true) {
      this.showFormBoolean = false;
    } else {
      this.showFormBoolean = true;
    }
  }

  specialList(food) {
    this.todayFood.push(food.quantity + "x " + food.name );
    this.totalCalories += (food.calories * food.quantity);
    
    this.newQuantity = {};
  }

  addFood() {
    this.foodList.push(this.newFood);
    this.newFood = {};
    this.showFormBoolean = false;
    this.showButom = true;
  }
}

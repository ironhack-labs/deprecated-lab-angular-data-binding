import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  // iteration 1 and 2
  buttonClick: boolean = false;

  // iteration 3
  foodList: Object[];
  newFood: Object = {};

  // iteration 4
  todaysFoods: Array<Object> = [];

  //bonus
  calorieCount: number = 0;

  constructor() {}

  ngOnInit() {
    this.foodList = foods;
  }

  buttonClicked() {
    this.buttonClick = !this.buttonClick;
    console.log(this.buttonClick);
  }

  addNewFood() {
    console.log("Add Food Item");
    // add food
    this.foodList.push(this.newFood);
    // clear
    this.newFood = {};
  }

  addTodaysFood(addedFood) {
    // push food object into todaysFoods array
    this.todaysFoods.push(addedFood);

    this.calorieCount += addedFood.calories;
    console.log(this.calorieCount);
  }
}

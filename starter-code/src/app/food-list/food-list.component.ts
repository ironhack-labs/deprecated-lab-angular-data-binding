import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  showForm = false;
  foods: Array<object> = foods;
  newFood: Object = {};
  // addedFood: Object = {};
  showTodaysFoods = false;
  todaysFoods: Array<object> = [];
  todaysFCalorieCount: Number = 0;

  constructor() { }
  ngOnInit() {
  }

  addFood() {
    this.showForm = true;
  }

  submitFood() {
    this.foods.unshift(this.newFood);
    this.showForm = false;
  }

  addToTodaysList(addedFood, q) {
    addedFood["quantity"] = q;
    let foodFound = false;
    let i=0;
    for (; i < this.todaysFoods.length; i++) {
      if (this.todaysFoods[i]["name"] == addedFood["name"]) {
        foodFound = true;
        break;
      }
    }
    if (foodFound) { 
      this.todaysFoods[i]["quantity"] += addedFood["quantity"]; 
    } else { 
      this.todaysFoods.unshift(addedFood); 
    }

    this.todaysFCalorieCount = this.todaysFoods.reduce((a, e) => a + e["quantity"] * e["calories"], 0)
    this.showTodaysFoods = true;
  }


}


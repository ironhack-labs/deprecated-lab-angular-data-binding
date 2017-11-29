import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  newFood: Object = {}; // empty object
  terms: String = null;
  displayForm: Boolean = true;
  displayList: Boolean = false;
  dailyList: Object[] = [];
  dailyCalories: Number = 0;
  constructor() { }

  ngOnInit() { // before everything is loaded, we do this
  }

  // Good practice: Always call functions used in the frontend handleShowForm etc.

  showForm() {
    if (this.displayForm) {
      return this.displayForm = false;
    }else {
      return this.displayForm = true;
    }
  }

  addFood() {
    this.foods.push(this.newFood);
    this.newFood = {};
    this.showForm();
  }

  hideList() {
    if (this.displayList) {
      return this.displayList = false;
    }else {
      return this.displayList = true;
    }
  }

  addToDailyList(food): void {
    this.dailyCalories += food.calories;
    // let index = foods.indexOf(food);
    this.dailyList.push(food);
  }
}

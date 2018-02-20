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
  myMenu: Array<object> = [];
  notEmpty: boolean = false;
  totalCalories: number = 0;
  myMenuIndexesAdded: Array<number> = [];
  indexClicked: number;
  constructor() {
  }
  ngOnInit() {
    this.foods = foods;
  }
  addFood() {
    this.newFood['quantity']=1;
    this.foods.unshift(this.newFood);
    this.newFood = {};
  }
  addMenu(food) {
    this.notEmpty = true;
    this.indexClicked = foods.indexOf(food);
    if (this.myMenuIndexesAdded.indexOf(this.indexClicked) === -1) {
      this.myMenuIndexesAdded.push((foods.indexOf(food)));
      this.myMenu.push(food);
    } else {
      this.myMenu[this.myMenuIndexesAdded.indexOf(this.indexClicked)]['quantity'] += 1
    }
    this.totalCalories += (food.calories * food.quantity);
  }
}



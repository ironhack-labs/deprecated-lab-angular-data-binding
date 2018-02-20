import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  newFood: Object = {};
  foodList: Object[];
  foodMenu: Object[];
  totalCalories: Number = 0;
  constructor() { }
  ngOnInit() {
    this.foodList = foods;
    this.foodMenu = [];
  }
  addFood() {
    console.log("Adding a new food :D")
    this.foodList.push(this.newFood);
    this.newFood = {};
  }
  addMenu(food) {
    console.log("Adding to the menu :)")
    this.newFood = food;
    this.foodMenu.push(this.newFood);
    this.totalCalories += food.calories;
    this.newFood = {};
  }
}

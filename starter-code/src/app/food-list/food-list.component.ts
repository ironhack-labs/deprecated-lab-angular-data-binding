import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList = foods;
  newFood = {};
  showForm = false;
  showButton = true;
  todayFood = [];
  totalCalories = 0;
  totalQuantity = 1;

  constructor() { }

  ngOnInit() {
  }

  formShow() {
    this.showForm = true;
    this.showButton = false;
  };

  addtoList(food) {
    if (food.quantity > 0) {
      this.todayFood.push(food);
    }
    this.totalCalories += (food.calories * food.quantity);
  }
  addFood() {
    this.foodList.push(this.newFood);
    this.newFood = {};
    this.showForm = false;
    this.showButton = true;
  };

}

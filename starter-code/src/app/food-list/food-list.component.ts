import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList = foods;
  showList = false;
  newFood = {};
  todayFoods= [];
  totalCalorieAmount = 0;
  numberOfFoods = 0;


  openAddList() {
    this.showList = true;
  }

  addFood() {
    this.foodList.push(this.newFood);
    this.newFood = {};
    this.showList = false;
  }

  addTodayFood(food) {

    for (let ix = 0; ix <= this.numberOfFoods - 1; ix++) {
    if (food.quantity === 0){
      this.todayFoods.push(food);
    }
    
    this.totalCalorieAmount += food.calories;
    food.quantity++;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: any[];
  newFood: Object = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0
  };
  showNewFoodForm = false;
  todayFoods: Object[];
  todayFoodsCalories: 0;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
    this.todayFoods = [];
    this.todayFoodsCalories = 0;
  }

  addFood() {
    this.foodList.push(this.newFood);
    this.newFood = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    };
    this.showNewFoodForm = false;
  }

  addTodayFoods(index) {
    this.todayFoods.push(this.foodList[index]);
    this.todayFoodsCalories += this.foodList[index].calories;
  }
}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: any[];
  newFood: any = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0
  };
  showNewFoodForm = false;
  todayFoods: any[];
  todayFoodsCalories: 0;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
    this.todayFoods = [];
    this.todayFoodsCalories = 0;
  }

  addFood() {
    this.foodList.push(this.newFood);
    this.clearNewFood();
    this.showNewFoodForm = false;
  }

  addTodayFoods(index, quantity) {
    let lastItem = 0;

    this.newFood.name = this.foodList[index].name;
    this.newFood.calories = this.foodList[index].calories;
    this.newFood.image = this.foodList[index].image;
    this.newFood.quantity = this.foodList[index].quantity;

    lastItem = this.todayFoods.push(this.newFood);
    this.todayFoods[lastItem - 1].quantity = quantity;
    this.todayFoodsCalories += this.newFood.calories * quantity;

    this.clearNewFood();
  }

  clearNewFood() {
    this.newFood = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    };
  }
}

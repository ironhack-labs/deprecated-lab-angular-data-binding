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
    let itemFound = -1;

    this.newFood.name = this.foodList[index].name;
    this.newFood.calories = this.foodList[index].calories;
    this.newFood.image = this.foodList[index].image;
    this.newFood.quantity = this.foodList[index].quantity;

    itemFound = this.todayFoods.findIndex(food => food.name === this.newFood.name);
    if (itemFound === -1 && quantity > 0) {
        lastItem = this.todayFoods.push(this.newFood) - 1;
    } else if (itemFound > -1) {
      if (this.todayFoods[itemFound].quantity > 0) {
        lastItem = itemFound;
      } else {
        this.todayFoods.splice(itemFound, 1);
        lastItem = -1;
      }
    } else {
      lastItem = -1;
    }

    if (lastItem > -1) {
      this.todayFoods[lastItem].quantity +=  parseInt(quantity, 10);
      this.todayFoodsCalories += this.newFood.calories * quantity;
    }

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

import { Injectable } from '@angular/core';
import foods from './foods';


@Injectable()
export class FoodService {
  foodsList:Array<any>;
  todaysFoodsList:Array<any> = [];
  totalCalories:number = 0;

  constructor() { this.foodsList = foods; }

  addFood(food) {
    this.foodsList.push({
      name: food.name,
      calories: food.calories,
      image: food.image,
      quantity: 0
    });
  }

  searchFood(value) {
    this.foodsList = foods;
    let tempArray = [];
    this.foodsList.forEach(food => {
      if (food.name.toLowerCase().includes(value.toLowerCase())) {
        tempArray.push(food);
      }
    });
    this.foodsList = tempArray;
  }

  addFoodOfDay(dayFood) {
    this.todaysFoodsList.push(dayFood);
    this.totalCalories += Number(dayFood.calories);
  }
}

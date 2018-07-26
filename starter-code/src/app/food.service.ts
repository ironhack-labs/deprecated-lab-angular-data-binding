import { Injectable } from '@angular/core';
import foods from './foods';


@Injectable()
export class FoodService {
  foodsListAll:Array<any>;
  foodsListVisible:Array<any>;
  todaysFoodsList:Array<any> = [];
  totalCalories:number = 0;

  constructor() { this.foodsListAll = foods; this.foodsListVisible = this.foodsListAll; }

  addFood(food) {
    this.foodsListAll.push({
      name: food.name,
      calories: food.calories,
      image: food.image,
      quantity: 0
    });
    this.foodsListVisible = this.foodsListAll;
  }

  searchFood(value) {
    this.foodsListVisible = this.foodsListAll;
    let tempArray = [];
    this.foodsListVisible.forEach(food => {
      if (food.name.toLowerCase().includes(value.toLowerCase())) {
        tempArray.push(food);
      }
    });
    this.foodsListVisible = tempArray;
  }

  addFoodOfDay(dayFood) {
    this.todaysFoodsList.push(dayFood);
    this.totalCalories += Number(dayFood.calories);
  }
}

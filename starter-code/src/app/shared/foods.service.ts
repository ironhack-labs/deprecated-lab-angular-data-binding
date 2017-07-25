import { Injectable } from '@angular/core';
import initialFoods from '../foods';

export interface IFood {
  name: string,
  calories: number,
  image: string,
  forToday: boolean,
  quantity: number
}

@Injectable()
export class FoodsService {

  foods: IFood[] = [];

  constructor() { 
    this.foods = initialFoods.map( initialFood => {
      return Object.assign({ forToday: false, quantity: 1}, initialFood) as IFood
    })
  }

  get todaysFoods() {
    return this.foods.filter( food => food.forToday);
  }

  get todaysCalorieCount() {
    return this.foods.reduce( (prev, cur) => {
      return prev + (cur.forToday ? cur.calories * cur.quantity : 0);
    }, 0)
  }
}

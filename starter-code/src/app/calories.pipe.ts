import { Pipe, PipeTransform } from '@angular/core';
import {FoodInterface} from './food.interface';

@Pipe({
  name: 'caloriesSum'
})
export class CaloriesPipe implements PipeTransform {

  transform(foodCart: Array<FoodInterface>, args?: any): number {
    return foodCart.reduce((total, food) => {
      return total + (food.calories * food.quantity)
      }, 0);
  }
}

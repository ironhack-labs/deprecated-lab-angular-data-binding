import { Pipe, PipeTransform } from '@angular/core';
import {Food} from './../../shared/models/food.model';

@Pipe({
  name: 'foodFinder'
})
export class FoodFinderPipe implements PipeTransform {

  transform(foodList: Array<Food>, pattern: string): Array<Food> {
    if(!Food) {
      return [];
    } else if (!pattern) {
      return foodList;
    }

    const regex = new RegExp(pattern, 'i');
    return foodList.filter(f => (f.name).match(regex));
    }
  }


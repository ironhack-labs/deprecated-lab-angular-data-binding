import { Pipe, PipeTransform } from '@angular/core';
import {FoodInterface} from './food.interface';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(foods: FoodInterface[], searchTerm: string): FoodInterface[] {
    if(!searchTerm || searchTerm === "") return foods;
    searchTerm = searchTerm.toLowerCase();
    return foods.filter((food) => food.name.toLowerCase().includes(searchTerm))
  }
}

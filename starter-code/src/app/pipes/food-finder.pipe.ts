import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './../shared/models/food.model'

@Pipe({
  name: 'foodFinder'
})
export class FoodFinderPipe implements PipeTransform {

  transform(foods: Food[], searchFood: string): Food[] {

    if (!foods || !searchFood){
      return foods;
    }

    return foods.filter(food => 
      food.name.toLowerCase().indexOf(searchFood.toLowerCase()) !== -1);
    }
}

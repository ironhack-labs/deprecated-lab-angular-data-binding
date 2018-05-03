import { Pipe, PipeTransform } from '@angular/core';
import foods from '../foods';

@Pipe({
  name: 'foodPipe'
})
export class FoodPipePipe implements PipeTransform {

  transform(value: Array<Object>, searchTerm: string): Object[] {
    if (!value) {
      return []; 
    }
    if (!searchTerm){
      return value;
    }
    searchTerm = searchTerm.toLowerCase();
    const filteredFood = [];

    for (let i=0; i<foods.length; i++){
      const foodNameLower = foods[i].name.toLowerCase();
      if (foodNameLower.includes(searchTerm)) {
        filteredFood.push(foods[i].name)
      }
      return filteredFood
    }
  }

}


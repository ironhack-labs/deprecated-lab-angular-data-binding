import { Pipe, PipeTransform } from '@angular/core';
import { Food, foodList } from '../foods';
@Pipe({
  name: 'foodPipe'
})
export class FoodPipePipe implements PipeTransform {
  
  transform(value: Array<Food>, searchTerm: string): any {
    if(!value) {
      return [];
    }

    if (!searchTerm) {
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    const filteredArray = [];

    value.forEach((oneFood) => {
      const lowerFoodName = oneFood.name.toLowerCase();
      if (lowerFoodName.includes(searchTerm)) {
        filteredArray.push(oneFood);
      }
    });
    return filteredArray;
  }

}

 
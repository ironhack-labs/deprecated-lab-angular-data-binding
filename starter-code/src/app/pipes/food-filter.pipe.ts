import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../foods';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value: Food[], searchTerm: string): Food[] {
    if (!value) {
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
      // if (lowerFoodName.includes(searchTerm)) 
    {
      }
    })
    return filteredArray;
  }


}

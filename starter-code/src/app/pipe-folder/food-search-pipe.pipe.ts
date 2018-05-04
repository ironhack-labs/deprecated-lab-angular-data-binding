import {Pipe, PipeTransform} from '@angular/core';
import {Food} from '../foods';

@Pipe({
  name: 'foodSearchPipe',
})
export class FoodSearchPipePipe implements PipeTransform {
  transform(value: Array<Food>, searchTerm: string): Array<Food> {
    if (!value) {
      return [];
    }
    if (!searchTerm) {
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    const filteredArray = [];

    value.forEach(oneFood => {
      const lowerFoodName = oneFood.name.toLowerCase();
      if (lowerFoodName.includes(searchTerm)) {
        filteredArray.push(oneFood);
      }
    });
    return filteredArray;
  }
}

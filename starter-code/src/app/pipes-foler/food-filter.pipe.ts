import { Pipe, PipeTransform } from '@angular/core';
import foods from '../foods';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: string): Array<Object> {
    if (!value) {
      return [];
    }

    if(!searchTerm) {
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    return value.filter((oneFood) => {
      const lowerFoodName = oneFood.name.toLowerCase();
      return lowerFoodName.includes(searchTerm);
    });

  }

}

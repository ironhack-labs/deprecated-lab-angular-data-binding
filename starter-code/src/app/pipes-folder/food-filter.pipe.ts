import { Pipe, PipeTransform } from '@angular/core';
import foods from '../foods';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value: any[], searchTerm: string): any[] {
    if (!value) {
      // return an empty array if no array provided
      return [];
    }

    if (!searchTerm) {
      // return the whole array if no search term was provided
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    const results: any[] = [];

    value.forEach((oneFood) => {
      const lowerName = oneFood.name.toLowerCase();

      if (lowerName.includes(searchTerm)) {
        results.push(oneFood);
      }
    });

    return results;
  }
}

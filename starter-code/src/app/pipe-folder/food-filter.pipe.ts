import { Pipe, PipeTransform } from '@angular/core';
import { foods , Foods } from '../foods';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value: any[], searchTerm: string): any[] {
    if (!value) {
      return [];
    }
    if (!searchTerm) {
      // return original array
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

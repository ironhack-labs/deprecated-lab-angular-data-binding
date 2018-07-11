import { Pipe, PipeTransform } from '@angular/core';
import {foods} from './foods';

@Pipe({
  name: 'searchFoods'
})
export class SearchFoodsPipe implements PipeTransform {

  transform(value: Array<any>, searchTerm: any): Array<any> {
    if (!value) {
      // return an empty array if no array profided
      return [];
    }

    if (!searchTerm) {
      // return the whole array if no search term was provided
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    const results: Array<any> = [];

    value.forEach((oneFood) => {
      const lowerName = oneFood.name.toLowerCase();

      if (lowerName.includes(searchTerm)) {
        results.push(oneFood);
      }
    });
    return results;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../foods';


@Pipe({
  name: 'searchFoodPipe'
})
export class SearchFoodPipePipe implements PipeTransform {

  transform(value: Food[], searchTerm: string): Food[] {
    if( !value ) {
      return [];
    }

    if( !searchTerm ) {
      // Return the original array if there's no search term
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    const filteredArray: Food[] = [];

    value.forEach(( oneFood ) => {
      const lowerCaseFood = oneFood.name.toLowerCase();
      if( lowerCaseFood.includes( searchTerm )) {
        filteredArray.push( oneFood );
      }
    });

    return filteredArray;
  }

}

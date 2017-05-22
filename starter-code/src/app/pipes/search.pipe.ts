import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(foods: Array<any>, searchTerm: string): any {

    return foods.filter((food) => {
      //If searchTerm is undefined or an empty string, show all of the foods
      if (!searchTerm || !searchTerm.length){
        return true;
      }

      //If the food doesn't have a name or isn't in the search,
      //then do not show the food
      if (food.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      //Otherwise, show the food
      return false;
    });
  }

}

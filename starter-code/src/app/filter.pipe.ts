import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(foods: any, search: string): any {
    // check if search term is empty: if so, show all the foods
    if(search === undefined) return foods;
    //otherwise, return filtered foods array
    return foods.filter(food =>{
      return food.name.toLowerCase().includes(search.toLowerCase());
    })
  }

}

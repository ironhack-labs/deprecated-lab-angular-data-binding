import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(foodArray: any, term: string): any[] {
    if(!foodArray){
      return [];
    }
    if(!term){
      return foodArray;
    }
    return foodArray.filter(food => food.name.includes(term));
  }

}

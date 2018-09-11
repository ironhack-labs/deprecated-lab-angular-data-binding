import { Pipe, PipeTransform } from '@angular/core';
import { Meals } from '../models/meals.model';

@Pipe({
  name: 'searcher'
})
export class SearcherPipe implements PipeTransform {

  transform(foods: Array<Meals>, search: string): Array<Meals> {
    if(!search) {
      return foods;
    }
    else if(!search) {
      return [];
    }

    const name = new RegExp(search, 'i');

    return foods.filter(food => food['name'].match(name));
  }

}

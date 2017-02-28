import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(foods: any[], field: string, value: string): any[] {
    if (!foods) {
      return [];
    }

    if (!value) {
      return foods;
    }

    return foods.filter(it => it[field].match(new RegExp(value, 'i')));
  }
}

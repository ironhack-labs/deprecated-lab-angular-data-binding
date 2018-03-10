import {Pipe, PipeTransform} from '@angular/core';
import {Food} from '../interfaces/food';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<Food>, field: string, value: string): Object[] {
    if (!items) {
      return [];
    }

    if (!value) {
      return items;
    }
    const myPattern = new RegExp(value, 'i');
    return items.filter(it => it[field].match(myPattern));
  }
}

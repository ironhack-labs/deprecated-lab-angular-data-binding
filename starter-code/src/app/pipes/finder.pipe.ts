import { Pipe, PipeTransform } from '@angular/core';
import foods from '../foods';

@Pipe({
  name: 'filter',
  pure: false     // <!-- We mark the pipe as "impure"
})
export class FinderPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
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

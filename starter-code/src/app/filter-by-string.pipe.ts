import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByString'
})
export class FilterByStringPipe implements PipeTransform {

  transform(items: any, filterField: string, filterStr: string): any {
    console.log(items, filterField, filterStr);
    if (!items) {
      return [];
    }

    if (!filterField) {
      return items;
    }

    const myPattern = new RegExp(filterStr, 'i');
    return items.filter(it => it[filterField].match(myPattern));
  }

}

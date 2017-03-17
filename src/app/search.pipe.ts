import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, fields, value): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    const myPattern = new RegExp(value, 'i');
    return items.filter(it => it[fields].match(myPattern));
  }

}

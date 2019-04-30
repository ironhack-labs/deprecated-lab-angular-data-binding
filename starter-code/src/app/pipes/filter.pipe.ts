import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any []{
    if(!items) {
      return [];
    }
    if(!value) {
      return items;
    }

    const searchPattern = new RegExp(value, 'i');
    return items.filter(it => it[field].match(searchPattern));
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  // pure: false,
})
export class SearchPipePipe implements PipeTransform {

  transform(items, field, value): any {
    if(!items) return [];
    if(!field) return items;
    if(!value) return items;
    const myPattern = new RegExp(value.toLowerCase());
    return items.filter(item =>
      item[field].toLowerCase().match(myPattern));
  }

}

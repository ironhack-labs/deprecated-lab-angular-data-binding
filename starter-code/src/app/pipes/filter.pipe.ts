import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any {
    const mySearch = new RegExp(value, 'i');
    return items.filter(it => it[field].match(mySearch));
  }

}

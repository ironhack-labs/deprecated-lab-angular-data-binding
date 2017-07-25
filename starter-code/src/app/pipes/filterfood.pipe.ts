import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterfood'
})
export class FilterfoodPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any {
    if (!items) { return []; }
    if (!value) { return items; }

    const myPattern = new RegExp(value, 'i');

    const returnArr = items.filter(it => it[field].match(myPattern) );

    return returnArr;
  }

}

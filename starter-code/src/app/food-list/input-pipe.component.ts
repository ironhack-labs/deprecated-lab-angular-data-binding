import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'foodpipe'
})
export class FoodPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
      if(!items) return [];
      if(!value)  return items;
      const filter = new RegExp(value, 'i');
      return items.filter(e => e[field].match(filter));
    }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodsFilter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }

    const pattern = new RegExp(value, 'i');
    return items.filter(item => item[field].match(pattern));
  }

}

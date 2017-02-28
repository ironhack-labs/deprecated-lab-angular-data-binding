import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'find'
})
export class find implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }

    if (!value) {
      return items;
    }

    return items.filter(it => it[field].match(new RegExp(value, 'i')));
  }
}

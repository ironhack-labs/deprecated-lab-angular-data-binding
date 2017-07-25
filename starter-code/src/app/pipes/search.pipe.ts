import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], field: string, patt: string): any[] {
    if (!items) return [];
    if (!patt) return items;

    const myPattern = new RegExp(patt, 'i');
    return items.filter(it => it[field].match(myPattern));
  }
}

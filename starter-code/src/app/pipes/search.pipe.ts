import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any, query?: any): any {
    if (!query) return list;
    if (!query) return list;

    return list.filter( item => item.name.toLowerCase().includes(query))
  }

}

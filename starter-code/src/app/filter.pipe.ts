import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[]{
    if (!items){
      return [];
    }

    if (!value){
      return items;
    }
    const myPattern = new RegExp(value,'i');
    // field indicate name, image...etc
    return items.filter(e => e[field].match(myPattern));
  }

}

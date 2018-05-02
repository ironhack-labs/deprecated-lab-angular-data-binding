import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
})

export class SearchPipePipe implements PipeTransform {

  // transform(value: any, text: string): Object[] {
  //   console.log(value, text)
  //   return value.filter(food => food.name.toLowerCase().includes(text));
  // }

  transform(items: any[], field: string, value: string): any[] {
    console.log(items, field, value)
    if (!items) {
      return [];
    }
  
    if (!value) {
      return items;
    }
  
    const myPattern = new RegExp(value, 'i');
    return items.filter(it => it[field].match(myPattern));
  }
}


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumItems'
})
export class SumItemsPipe implements PipeTransform {

  transform(items: Array<Object>, attr: string): any {
      return items.reduce((a, b) => a + b[attr], 0);
  }

}

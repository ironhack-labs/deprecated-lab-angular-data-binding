import { Pipe, PipeTransform } from '@angular/core';
import { elementDef } from '@angular/core/src/view';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'sumPipe',
  pure: false
})
export class SumPipePipe implements PipeTransform {

  transform(foods: any, args?: any): any {

    if (!foods) {
      return '0';
    }

    return foods.reduce((acc, curr) => {
      return acc + curr.calories;
    }, 0);


  }

}

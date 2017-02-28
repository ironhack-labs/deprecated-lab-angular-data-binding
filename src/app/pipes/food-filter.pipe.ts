import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(foods: any[], field: string, value: string): any[] {
    if (!foods) {
      return [];
    }

    if (!value) {
      return foods;
    }
    return foods.filter(it => it[field].match(new RegExp( value, 'i')));
  }

}

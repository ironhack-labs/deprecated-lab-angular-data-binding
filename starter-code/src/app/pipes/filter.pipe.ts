import { Pipe, PipeTransform } from '@angular/core';
import comidas from '../food-list/foods';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(foods: Object[], field: string, search: string): any {
    if(!comidas) return [];
    if(!search) return comidas;
    const expresion = new RegExp(search, "i");
    return comidas.filter(foods => expresion.test(foods[field]));
  }

}

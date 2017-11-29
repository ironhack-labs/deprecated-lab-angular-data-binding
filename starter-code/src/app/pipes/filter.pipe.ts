import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(foods: any[], field: string, value: string): any[] {
    if(!foods)return[];
    if(!value)return foods;
    const pattern = new RegExp(value, 'i');
    console.log(foods); //El array con todos los alimentos
    console.log(value); //El contenido del campo input
    console.log(field); //El elemento del array por el que filtramos
    return foods.filter(it => it[field].match(pattern));
  }

}

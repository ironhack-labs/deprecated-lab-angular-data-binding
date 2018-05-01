import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, text: string): Object[] {
    if(!text) return value
    return value.filter(food => food.name.toLowerCase().includes(text))
  }

}

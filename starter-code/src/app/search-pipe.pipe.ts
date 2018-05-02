import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
})

export class SearchPipePipe implements PipeTransform {

  transform(value: any, text: string): Object[] {
    console.log(value, text)
    if(!text) return value;
    return value.filter(food => food.name.toLowerCase().includes(text));
  }
}


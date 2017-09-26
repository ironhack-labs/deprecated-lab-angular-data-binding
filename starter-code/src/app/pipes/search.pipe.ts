import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array: any[], input: string): any {
    if (input === "") {
      return [];
    }
    return array.filter(food => food.name.includes(input));
  }

}

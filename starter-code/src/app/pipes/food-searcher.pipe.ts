import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodSearcher'
})
export class FoodSearcherPipe implements PipeTransform {
  // transform(input: string[], term: string): any {
  //   let filteredItems = input.filter((item) => item.name)
  //   return filteredItems;
  // }
  transform(value: any, args?: any): any {
    return null;
  }
}

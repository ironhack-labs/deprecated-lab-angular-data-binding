import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  pure: false
})
export class FilterByNamePipe implements PipeTransform {

  transform(foodArray: Array<any>, field: string, value: string): any [] {
    if (!foodArray) {
      return [];
    }

    if (!value) {
      return foodArray;
    }

    const expression = new RegExp(value, "i");
    return foodArray.filter(food => {
      return food[field].match(expression);
    })
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(foodArray: any[], searchParameter: string): any {
    return  foodArray.filter(food => food.name.toLowerCase().indexOf(searchParameter.toLowerCase()) !== -1);
  }

}

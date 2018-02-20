import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(foodList: Array<Object>,field: string, search: string): Array<Object> {
    if ( !foodList){
      return []
    }
    if (!search){
      return foodList
    }

    let filterSearch = new RegExp(search, "i");
    return foodList.filter(food => food[field].match(filterSearch));
  }
}
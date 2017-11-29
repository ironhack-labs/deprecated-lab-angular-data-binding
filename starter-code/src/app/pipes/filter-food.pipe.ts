import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFood'
})
export class FilterFoodPipe implements PipeTransform {

  transform(value: any, search: string): any {
    const newArray = value.filter((item) => {
      if (!search){
        return true;
      }
      // To prevent from entries with null and upper/lowercase:
      if((""+item.name).toLowerCase().match(search.toLowerCase()) || ("" + item.calories).match(search)){
        return true;
      }
    });
    return newArray;
  }

}

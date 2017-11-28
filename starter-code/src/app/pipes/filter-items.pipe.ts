import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {

  transform(value: any, terms: string): any {
    const newArray = value.filter((item) => {
      if (!terms){
        return true;
      }
      //To prevent from entries with null and upper/lowercase:
      if((""+item.name).toLowerCase().match(terms.toLowerCase()) || ("" + item.calories).match(terms)){
        return true;
      }
    });
    return newArray;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(foodList: any[], field?: string, value?: string): any[] {

    if (!foodList) {
      return [];
    }

    if (!value) {
      return foodList;
    }
    const myPattern = new RegExp(value, 'i');
    return foodList.filter(it => it[field].match(myPattern));
  }

}

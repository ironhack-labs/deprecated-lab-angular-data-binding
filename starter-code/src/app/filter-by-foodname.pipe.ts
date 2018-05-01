import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByFoodname'
})
export class FilterByFoodnamePipe implements PipeTransform {

  transform(items: any, searchText: string): any[] {
    console.log(items)
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
   }
}

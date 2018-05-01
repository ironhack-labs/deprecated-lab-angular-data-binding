import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    
    return items.filter(function(e){
    
      if (((e.name).toLowerCase()).indexOf(searchText)>-1){
        return e
      }
});
 }
}
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchText?: any): any[] {

    if(searchText === undefined || searchText === '') return value;

    return value.filter(function(val) {

      if (!val.name || !searchText) return false;

      return val.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}
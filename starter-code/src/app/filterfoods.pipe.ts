import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterfoods'
})
export class FilterfoodsPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    return value.filter((item)=>{

      return item.name === searchTerm
    });
  }

}

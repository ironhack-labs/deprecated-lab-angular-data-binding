import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

      transform(items: any[], name: string, value: string): any{
        if (!items){
              return [];
            }
        
        const myPattern = new RegExp(value, 'i');
        return items.filter(it=>it[name].match(myPattern));
      }

}

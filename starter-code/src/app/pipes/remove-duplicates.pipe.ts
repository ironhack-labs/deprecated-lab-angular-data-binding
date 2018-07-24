import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDuplicates'
})
export class RemoveDuplicatesPipe implements PipeTransform {

  transform(items: any[]): any {
    items.sort();

    items.filter((e,i,items)=>{
      return items.indexOf(e)==i
    })

    return items
  }

}

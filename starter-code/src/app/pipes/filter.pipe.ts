import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const filter = args.toLowerCase();
    if (filter === ) {
      return value;
    }


    const filteredItems = value.filter((item) => {
      if (item.name.toLowerCase().includes(filter)) {
        return item;
      }
    });
    return filteredItems;

  }

}

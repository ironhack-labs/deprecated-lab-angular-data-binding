import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any, searchTerm?: string): any {
    if (!items) {
      return [];
    }

    if (!searchTerm) {
      return items;
    }

    const searchPattern = new RegExp(searchTerm, 'i');
    return items.filter(item => {
      return item.name.match(searchPattern);
    });
  }


}

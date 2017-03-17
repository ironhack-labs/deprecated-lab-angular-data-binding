import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Array<any>, target: string): any {

    if (!items) {
    return [];
  }

  if (!target) {
    return items;
  }
    return items.filter((food) => {return food['name'].match(target);
  });
  }

}

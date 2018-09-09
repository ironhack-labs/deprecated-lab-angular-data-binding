import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finderPipe'
})
export class FinderPipePipe implements PipeTransform {

  transform(foods: Object[], pattern: string, field: string = 'name'): Object[] {
    if (!foods) {
      return [];
    } else if (!pattern) {
      return foods;
    }
    const regex = new RegExp(pattern, 'i');
    return foods.filter(f => f[field].match(regex));
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodFilter'
})
export class FoodfilterPipe implements PipeTransform {

  transform(value: any, terms: string): any {
    return value;
  }

}

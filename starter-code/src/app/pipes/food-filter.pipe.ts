import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../foods';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value: Food[], searchTerm: string): Food[] {
    if(!searchTerm) {
      return value;
    }
    searchTerm = searchTerm.toLowerCase();
    return value.filter(oneFood => {
      return oneFood.name.toLowerCase().includes(searchTerm);
    });
  }

}

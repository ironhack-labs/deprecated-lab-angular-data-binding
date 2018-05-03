import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../foods';



@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value: Array<Food>, searchTerm: string): Array<Food> {
    if (!value) {
      return [];
    }

    if(!searchTerm) {
      return value;
    }
    searchTerm = searchTerm.toLocaleLowerCase();

    const filteredArray = []; 

    value.forEach((oneFood) => {
      const lowerFoodName = oneFood.name.toLocaleLowerCase();
      if (lowerFoodName.includes(searchTerm)) {
        filteredArray.push(oneFood);
      }
    });
    return filteredArray;
  }

}

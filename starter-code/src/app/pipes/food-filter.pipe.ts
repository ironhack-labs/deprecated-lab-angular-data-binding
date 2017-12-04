import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(fullArray: any[], searchTerm: string): any[] {

    if(!searchTerm) {
      return fullArray;
    }

    searchTerm = searchTerm.toLowerCase();

    const filteredArray = [];

    fullArray.forEach((oneItem) => {
      if (oneItem.name.toLowerCase().includes(searchTerm)) {
        filteredArray.push(oneItem);
      }
    });
    return filteredArray;
  }

}

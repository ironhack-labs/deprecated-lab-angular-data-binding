import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByTerm'
})
export class SearchbytermPipe implements PipeTransform {

  transform(myArray: any[], inputValue: string): any[] {
    if (!myArray) {
      return [];
    }

    if (!inputValue) {
      return myArray;
    }

    const filteredFoods = [];

    inputValue = inputValue.toLowerCase();

    myArray.forEach((oneFood) => {
      const lowerName = oneFood.name.toLowerCase();

      if (lowerName.includes(inputValue)) {
        filteredFoods.push(oneFood);
      }
    });
    return filteredFoods;
  }

}

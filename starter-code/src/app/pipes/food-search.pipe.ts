import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodSearch'
})
export class FoodSearchPipe implements PipeTransform {

  transform(myArray: any[], inputValue: string): any[] {
      if (!myArray) {
          return [];
      }
      // return the full array if search input is empty
      if (!inputValue) {
          return myArray;
      }

      const filteredArray = [];

      inputValue = inputValue.toLowerCase();

      myArray.forEach((oneItem) => {
          const lowerName = oneItem.name.toLowerCase();

          if (lowerName.includes(inputValue)) {
              filteredArray.push(oneItem);
          }
      });

      return filteredArray;
  }

}

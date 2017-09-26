import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(myArray: any, inputValue: any): any {
    if(!myArray){
    return [];
      }

    if(!inputValue){
      return myArray;
    }

    const filteredArray = [];

    inputValue = inputValue.toLowerCase();

    myArray.forEach((oneItem) => {
        const lowerName = oneItem.name.toLowerCase();

        if(lowerName.includes(inputValue)){
          filteredArray.push(oneItem);
        }
    });

    return filteredArray;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(myArray: any[], inputValue: string): any[] {
  if(!myArray){
    return [];
  }

  if(!inputValue) {
    return myArray;

  }
  const filteredArray = [];

  inputValue = inputValue.toLowerCase();

  myArray.forEach((oneFood) => {
    const lowerName = oneFood.name.toLowerCase();

    if(lowerName.includes(inputValue)){
      filteredArray.push(oneFood);
    }
  });
  return filteredArray;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fodify'
})
export class FodifyPipe implements PipeTransform {

  transform(foodArray: any[], searchTerm: string): any[] {
    if(!foodArray) {
      return [];
    }

    if(!searchTerm) {
      return foodArray;
    }
  

    const filteredArray = [];

    foodArray.forEach( oneFood => {
      if(oneFood.name.toLowerCase().includes(searchTerm)) {
        filteredArray.push( oneFood );
      }
    });

    return filteredArray;
  }
}

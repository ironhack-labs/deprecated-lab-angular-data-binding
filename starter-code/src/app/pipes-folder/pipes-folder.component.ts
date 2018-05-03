import { Pipe, PipeTransform } from '@angular/core';

import { Food } from '../foods';

@Pipe({
  name: 'foodFilter'
})
export class foodFilterPipe implements PipeTransform {

  transform(value: Array<Food>, searchTerm : string): Array<Food> {
    if (!value){
      return[];
    }
    if (!searchTerm){
      //return the original array if there's no search term
      return value;
    }
    searchTerm = searchTerm.toLocaleLowerCase(); 

    const filteredArray = [];

    value.forEach ((oneFo) =>{
      const lowerFoodName = oneFo.name.toLowerCase();
      if(lowerFoodName.includes(searchTerm)){
        filteredArray.push(oneFo);
      }
    });

    return filteredArray;

  }

}


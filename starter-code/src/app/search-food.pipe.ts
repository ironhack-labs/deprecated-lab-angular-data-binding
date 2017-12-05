import { Pipe, PipeTransform } from '@angular/core';

import  foods  from './foods';

@Pipe({
  name: 'searchFood'
})
export class SearchFoodPipe implements PipeTransform {

    transform(fullArray: any[], searchTerm: string): any[] {
      if (!fullArray) {
        return [];
      }

      if(!searchTerm){
        return fullArray;
      }

      searchTerm = searchTerm.toLowerCase();

      const filteredArray = [];

      fullArray.forEach ((oneItem) => {
        if(oneItem.name.toLowerCase().includes(searchTerm)) {
          filteredArray.push(oneItem);
        }
      });

      return filteredArray;


  }

}

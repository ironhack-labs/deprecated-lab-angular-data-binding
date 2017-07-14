import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doTheSearch'
})
export class DoTheSearchPipe implements PipeTransform {
  foodSearchText: string = "";

  transform(value: any, searchTerm: string): any {
    // if the array is undefined or something weird
      if( !value){
        return [];
      }
      // if no search term is provided, return the original array
      if(!searchTerm){
        return value;
      }
      let matchedResults = [];
      // lower case the name so that it works for all cases
      searchTerm = searchTerm.toLowerCase();
      value.forEach((oneItem)=>{

        if(oneItem.name.toLowerCase().includes(searchTerm)){
          matchedResults.push(oneItem);
        }
      });
      return matchedResults;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, searchText: string): any {
    //if array is undefined
    if (!value){
      return [];
    }
    //if no search term is provided return the original array
    if(!searchText) {
      return value;
    }
    let matchedResults = [];

    //lowercase the search term so that it works for all cases
     searchText = searchText.toLowerCase();

     value.forEach((oneItem)=>{
       // lowercase the name so that it works for all cases
       //if the name has the search term in it, push it to the new array
       if (oneItem.name.toLowerCase().includes(searchText)){
         matchedResults.push(oneItem);
       }
     });
     return matchedResults;

  }
}

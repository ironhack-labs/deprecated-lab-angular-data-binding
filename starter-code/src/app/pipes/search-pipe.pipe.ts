import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(foodArray: any[], inputValue: string): any[] {
    const filteredArray = [];
    if(!inputValue){ return foodArray}
    inputValue =  inputValue.toLowerCase();
    foodArray.forEach((item)=>{
      const lowerItem = item.name.toLowerCase();
      if(lowerItem.includes(inputValue)){
        filteredArray.push(item);
      }
    });
    return filteredArray;
  }

}

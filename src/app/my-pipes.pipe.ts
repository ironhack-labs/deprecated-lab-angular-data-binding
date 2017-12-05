import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipes'
})
export class MyPipesPipe implements PipeTransform {

    transform(fullArray: any[], searchFood: string): any[] {
       if (!fullArray) {
           return [];
       }

       if (!searchFood) {
           return fullArray;
       }

       searchFood = searchFood.toLowerCase();

       const filteredArray = [];

       fullArray.forEach( (oneItem) => {
           if (oneItem.name.toLowerCase().includes(searchFood)) {
               filteredArray.push(oneItem);
           }
       });

       return filteredArray;

     }


}

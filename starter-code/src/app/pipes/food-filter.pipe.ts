import { Pipe, PipeTransform } from '@angular/core';
import { Food, foodList } from '../foods';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {
 
  transform(value: Array<Food>, searchTerm : string): Array<Food> {
    // put the logic here mout
    if (!value){
      return[];
    }

    if (!searchTerm){
      return value; 
    }

    searchTerm = searchTerm.toLowerCase();

    const filteredArray : Array<Food> = [];

    value.forEach((oneActor) =>{
      const lowerActorName = oneActor.name.toLowerCase();
      if (lowerActorName.includes(searchTerm)){
        filteredArray.push(oneActor);
      }
    });
    return filteredArray;
  }
}
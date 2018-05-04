import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../foods';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {
// can also write Food[] instead of Array<Food>
  transform(value: Array<Food>, userInput: string): Array<Food> {
    //filter it so only our search term is kept
    if (!userInput) {
      return [];
    }

    if (!userInput) {
      // return the original array if there is no search term
      return value;
    }

    userInput = userInput.toLowerCase();
    // created new array
      const filteredArray: Array<Food> = [];
    // loop over array
      value.forEach((oneFood) => {
        const lowerFoodName = oneFood.name.toLowerCase()
        if (lowerFoodName.includes(userInput)) {
          filteredArray.push(oneFood);
        }
      });

      return filteredArray;

      //Pro way: 
      // return value.filter(oneActor => {
      //   const lowerActorName = oneActor.actorName.toLowerCase();
      //   return lowerActorName.includes(searchTerm)
      // });

  }
}
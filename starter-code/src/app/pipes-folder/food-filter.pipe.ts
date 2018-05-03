import { Pipe, PipeTransform } from "@angular/core";
import { Food, foodList } from "../foods";

@Pipe({
  name: "foodFilter"
})
export class FoodFilterPipe implements PipeTransform {
  transform(value: Array<Food>, searchTerm: string): Array<Food> {
    if (!value) {
      return [];
    }
    if (!searchTerm) {
      //return the original array if there is no search term
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    const filteredArray: Array<Food> = [];

    value.forEach(oneFood => {
      const lowerFoodName = oneFood.name.toLowerCase();
      if (lowerFoodName.includes(searchTerm)) {
        filteredArray.push(oneFood);
      }
    });
    return filteredArray;
  }
}

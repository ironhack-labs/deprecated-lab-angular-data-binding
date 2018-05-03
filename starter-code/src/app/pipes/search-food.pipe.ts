import { Pipe, PipeTransform } from "@angular/core";
import foods from "../foods";

@Pipe({
  name: "searchFood"
})
export class SearchFoodPipe implements PipeTransform {
  // Actor [] and Array<Actor> are the same
  transform(value: any, searchTerm: string): Array<Object> {
    if (!value) {
      return [];
    }

    if (!searchTerm) {
      // return the original array if there's no search term
      return value;
    }

    searchTerm = searchTerm.toLowerCase();
    const filteredArray: Object[] = [];
    value.forEach(oneFood => {
      const lowerFoodName = oneFood.name.toLowerCase();
      console.log(lowerFoodName);
      console.log(searchTerm);
      if (lowerFoodName.includes(searchTerm)) {
        filteredArray.push(oneFood);
      }
    });
    return filteredArray;
  }
}

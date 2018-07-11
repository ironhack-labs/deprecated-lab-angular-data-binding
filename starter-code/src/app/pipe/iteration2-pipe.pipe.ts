import { Pipe, PipeTransform } from "@angular/core";
import { Food } from "../foods";
// import { Food, FoodListComponent } from "../food-list/food-list.component";
@Pipe({
  name: "iteration2Pipe"
})
export class Iteration2PipePipe implements PipeTransform {
  transform(value: Array<Food>, searchTerm: string): Array<Food> {
    if (!value) {
      return [];
    }
    if (!searchTerm) {
      return value;
    }

    searchTerm = searchTerm.toLowerCase();
    const results: Array<Food> = [];

    value.forEach(onefood => {
      const lowerName = onefood.name.toLowerCase();

      if (lowerName.includes(searchTerm)) {
        results.push(onefood);
      }
    });
    return results;
  }
}

import { Pipe, PipeTransform } from "@angular/core";
import { FoodInterface } from "./food"

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<FoodInterface>, filterField: string, filterStr: string): any {
    if (!items) return [];
    if (!filterField) return items;

    let pattern = new RegExp(filterStr, "ig");
    return items.filter(el => el[filterField].match(pattern));
  }
}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "foodfilter"
})
export class FoodfilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}

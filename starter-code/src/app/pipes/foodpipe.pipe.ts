import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "foodpipe"
})
export class FoodpipePipe implements PipeTransform {
  transform(value: foods, args?: terms): any {
    return null;
  }
}

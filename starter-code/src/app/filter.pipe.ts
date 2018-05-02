import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter", 
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let searchedFood = value.filter(e => {
      return e.name.toLowerCase().includes(args.toLowerCase());
    });

    return searchedFood;
  }
}

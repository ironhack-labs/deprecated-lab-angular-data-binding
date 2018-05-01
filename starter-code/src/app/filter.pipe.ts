import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    // console.log(value);

    let searchedFood = value.filter(e => {
      return e.name.toLowerCase().includes(args.toLowerCase());
    });

    return searchedFood;

    // let result = [];
    // value.forEach(e => {
    //   if (e.name === args) {
    //     result.push(e);
    //   }
    // });ss
    // return result;

    // console.log(args);
  }
}

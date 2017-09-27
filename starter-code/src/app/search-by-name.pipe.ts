import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchByName"
})
export class SearchByNamePipe implements PipeTransform {
  transform(value: any, inputValue: string): any {
    if (!value) {
      return [];
    }

    if (!inputValue) {
      return value;
    }

    return value.filter(
      val => val.name.toLowerCase() === inputValue.toLowerCase()
    );
  }
}

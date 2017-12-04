import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(fullArray: any[], searchTerm: string): any[] {
    if (!fullArray) {
      return [];
    }
    if (!searchTerm) {
      return fullArray;
    }
    const filteredArray = [];
    fullArray.forEach((oneItem) => {
      if (oneItem.name.toLowerCase().includes(searchTerm)) {
        filteredArray.push(oneItem);
      }
    });
    return filteredArray;
  }
}

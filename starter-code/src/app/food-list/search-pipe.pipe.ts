import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, keyword: string): any {
    if(!keyword) return value;
    // if(!value) return [];
    let searchResults = [];
    value.forEach(el => {
      if (el.name.toLowerCase().includes(keyword)) {
        searchResults.push(el);
      }
    });
    return searchResults;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
  transform(inputs: any[], term: any[]): any {
      if(!term) return inputs;
      return inputs.filter(input => input.name.indexOf(term) !== -1);
  }
}
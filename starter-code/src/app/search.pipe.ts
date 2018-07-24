import { Pipe, PipeTransform } from '@angular/core';
import { AppComponent} from './app.component'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(theThingWeAreChanging: any, args?: any): any {

    if (theThingWeAreChanging.name !==searchInput.value) {
      return [];
    }

  //   if (!value) {
  //     return items;
  //   }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // Got this from the lesson, Look into the Syntax and Logic of this
  transform(foodItems: any[], field: string, value:string): any[] {
    if (!foodItems) {
      return [];
    }

    if (!value) {
      return foodItems;
    }

    const myPattern = new RegExp(value, 'i');
    // Using the Normal JS Filter Method 
    return foodItems.filter(it => it[field].match(myPattern));
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value:Array<any>, searchTerm:string): Array<any> {
    if (!value) {
      return []
    };
    
    if (!searchTerm) {
      return value;
    }

    searchTerm = searchTerm.toLowerCase();
    const results: Array<any> = [];

    value.forEach((oneFood) => {
      const lowerName = oneFood.name.toLowerCase();
      if (lowerName.includes(searchTerm)) {
        results.push(oneFood);
      }
    });
    return results;
  }
}

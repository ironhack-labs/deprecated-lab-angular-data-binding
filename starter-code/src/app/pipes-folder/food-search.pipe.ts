import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodSearch'
})
export class FoodSearchPipe implements PipeTransform {
  
  transform(value: any[], searchTerm: string): any[] {
    if (!value) {
      return [];
    }
    
    if (!searchTerm) {
      return value;
    }
    
    searchTerm = searchTerm.toLowerCase();
    
    const filteredArray = [];
    
    value.forEach((oneFood) => {
      const lowerFoodName = oneFood.name.toLowerCase();
      
      if (lowerFoodName.includes(searchTerm)) {
        filteredArray.push(oneFood)
      }
    });
    return filteredArray
  }
}

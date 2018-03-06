import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
      caloriesList: any[] = [];
  
  transform(foods: any[]): any {
      // Push Calories Values From Food Objects To An Empty Array  
      foods.forEach(food=>{
          this.caloriesList.push(food.calories);
        });
        // console.log(this.caloriesList);
        console.log ("my thing:",this.caloriesList.reduce((sum, current) => sum + current));

    return this.caloriesList.reduce((sum, current) => sum + current);
  }

}

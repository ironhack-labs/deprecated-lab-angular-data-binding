import { Pipe, PipeTransform } from '@angular/core';
import foods from '../foods';


@Pipe({
  name: 'foodSearch'
})
export class FoodSearchPipe implements PipeTransform {

  transform(value: Array<any> , searchWor:string): Array<any> {
    if (!value){
      return [];
    }

    if (!searchWor) {
      return value;
    }
    searchWor = searchWor.toLocaleLowerCase();
    // const searchedFood = [];


    // value.forEach((oneF) => {
    //   const lowerFoodName = oneF.name.toLocaleLowerCase();
    //   if (lowerFoodName.inculdes(searchWor)){
    //     searchedFood.push(oneF);
    //   }
      
    // });
    // return searchedFood;

    return value.filter(oneF => {
      const lowerFoodName = oneF.name.toLocaleLowerCase();
        return lowerFoodName.includes(searchWor)
    });
  
  }
}

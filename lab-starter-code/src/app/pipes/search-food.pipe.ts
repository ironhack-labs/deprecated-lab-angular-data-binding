import { Pipe, PipeTransform } from '@angular/core';
import { FoodModel } from '../models/food.model'

@Pipe({
  name: 'searchFood'
})
export class SearchFoodPipe implements PipeTransform {

  transform(foodList: Array<FoodModel>, filterWord:string ,args?: any): Array<FoodModel> {
    let newList = foodList.filter((food) =>{
      return food.name.toLowerCase().includes(filterWord.toLowerCase())
    });
    return newList;
  }

}

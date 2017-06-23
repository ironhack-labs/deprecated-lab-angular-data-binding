 import { Pipe, PipeTransform } from '@angular/core';
import foods from '../foods';
import {foo} from '../food';


@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(input: string) {
       let arrayOfFood = [];
        if (!input) {
            return foods;
        }

        foods.forEach((food)=>{

          if(food.name.toLowerCase().indexOf(input)> -1){
            console.log(food)
            return arrayOfFood.push(food);

          }

        });
        console.log(arrayOfFood)

return arrayOfFood;
    }
}

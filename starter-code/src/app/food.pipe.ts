import { Food } from './food.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'foodFinder'
})

export class FoodFinderPipe implements PipeTransform {
    transform(foods: Array<Food>, pattern: string, field: string = 'name'): Array<Food> {
        if (!foods) {
            return [];
        } else if (!pattern) {
            return foods;
        }
    const regex = new RegExp(pattern, 'i');
    return foods.filter(food => food[field].match(regex));

    }
}
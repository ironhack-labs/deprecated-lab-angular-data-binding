import { Food } from '../models/food.model'
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'foodFinder'
})
export class foodFinderPipe implements PipeTransform {
    transform(foods: Array<Food>, pattern: string, field: string = "name"): Array<Food> {
        if (!foods) {
            return [];
        } else if (!pattern) {
            return foods;
        }

        const regex = new RegExp(pattern, 'i');
        return foods.filter(f =>f[field].match(regex))
    }
}
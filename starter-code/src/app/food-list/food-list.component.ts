import { Component } from '@angular/core';
import { Food } from '../shared/models/food.model'
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html'
})
export class FoodListComponent {
  foods: Array<Food> = foods;
}

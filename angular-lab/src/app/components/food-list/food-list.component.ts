import { Component } from '@angular/core';
import foods from '../../shared/data/foods.data';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html'
})
export class FoodListComponent {
  foods = foods;
}

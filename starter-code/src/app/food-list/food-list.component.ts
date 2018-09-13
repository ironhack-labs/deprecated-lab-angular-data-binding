import { Component } from '@angular/core';
import foods from '../foods.data';
import { Food } from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {

  foods: Array<Food> = foods;
  newFood: Food = new Food();
  addFood(): void {
    this.foods.push(this.newFood);
    this.newFood = new Food();
  }

};

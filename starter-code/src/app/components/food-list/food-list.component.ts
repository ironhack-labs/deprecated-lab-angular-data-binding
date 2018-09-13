import { Component, OnInit } from '@angular/core';
import foods from '../../../shared/data/foods';
import { Food } from '../../models/food.model'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foodList: Array<Food> = foods;
  newFood: Food = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0
  }
  newFoodVisible: Boolean = false;

  addNewFoodPressed(): void {
    this.newFoodVisible = !this.newFoodVisible;
  }

  addNewFood() {
    this.foodList.push(this.newFood);
    
  }
}

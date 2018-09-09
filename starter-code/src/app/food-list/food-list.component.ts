import { Component } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent{
  foods: Object[] = foods;
  today = new Date();
  newFood = {
    name: '',
    calories: 0,
    image: '',
  }

  onClickCreateFood(): void {
    this.foods.push(this.newFood)
  }
}

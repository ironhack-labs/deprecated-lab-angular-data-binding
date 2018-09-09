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
    calories: '',
    image: '',
  }
  onClickShowForm = false;

  todaysFood = [];
  todaysFoodIntake: number = 0;
  
  
  onClickCreateFood(): void {
    this.foods.push(this.newFood);
    this.onClickShowForm = false;
  }

  onClickAddFood(food) {
    this.todaysFood.push(food);
    this.todaysFoodIntake = this.todaysFoodIntake + food.calories;
  }

}

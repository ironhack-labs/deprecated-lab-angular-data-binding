import { Component } from '@angular/core';
import foods from '../../shared/data/foods.data';
import { Meals } from '../../shared/models/meals.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html'
})
export class FoodListComponent {
  foods: Array<Meals> = foods;
  newFood: Meals = new Meals();
  showForm: boolean = false;

  onClickShowForm(): void {
    this.showForm = true;
  }

  onClickAddFood(name: string, calories: number, image: string): void {
    if(!this.newFood.name || !this.newFood.calories || !this.newFood.image ) {
      this.showForm = false;
    }
    else {
      this.foods.push(this.newFood);
      this.newFood = new Meals();
      this.showForm = false;
    }
  }
}

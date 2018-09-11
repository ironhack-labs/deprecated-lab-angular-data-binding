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
  showList: boolean = false;
  foodList: Array<string> = [];
  calCounter: number;

  onClickShowForm(): void {
    this.showForm = true;
  }

  onClickAddNew(name: string, calories: string, image: string): void {
    if(!this.newFood.name || !this.newFood.calories || !this.newFood.image ) {
      this.showForm = false;
    }
    else {
      this.foods.push(this.newFood);
      this.newFood = new Meals();
      this.showForm = false;
    }
  }

  onClickAddToList(name: string, quantity: string, calories: string){
    this.showList = true; 
    this.foodList.push(name);
    this.calCounter = Number(calories);

    for(let i = 0; ){

    }
  }
}

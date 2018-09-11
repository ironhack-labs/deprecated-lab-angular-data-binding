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
  foodList: Array<Array> = [];
  calCounter: number = 0;
  foodQuantity: number = 1;
  quantityCounter: number = 0;

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
    this.foodQuantity = Number(quantity); 
    this.foodList.push([name, quantity]);
    this.calCounter += (Number(calories) * this.foodQuantity);
  }
}

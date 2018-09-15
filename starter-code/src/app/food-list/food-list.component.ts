import { Component } from '@angular/core';
import foods  from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent  {
  foods: Array<Object> = foods;
  searchFood: string;
  newFood: Object = {};
  showAddForm: boolean = false;

  addFood(): void {
    this.foods.push(this.newFood);
    this.newFood = {};
    this.showAddForm = false;
  }

  showForm(): void {
    this.showAddForm = !this.showAddForm;
  }
}




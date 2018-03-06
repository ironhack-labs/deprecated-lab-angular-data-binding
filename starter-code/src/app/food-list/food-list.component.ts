import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  food: Object = {};
  foodsToday: Array<Object> = [];
  visible: boolean;
  totalCal: number;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.totalCal = 0;
  }

  showForm(): void {
    this.visible = true;
  }

  addFood(): void {
    if (Object.keys(this.food).length !== 0) {
      this.foods.push(this.food);
      this.food = {};
    }
    this.visible = false;
  }

  addItem(food): void {
    if (food.quantity > 0) {
      this.foodsToday.push(food);
      this.totalCal += (food.calories * food.quantity);
    }
    console.log(this.foodsToday);
  }

}

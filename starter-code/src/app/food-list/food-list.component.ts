import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<Object> = foods;
  visible: boolean = false;
  food: object = {};
  todayList: Array<Object> = [];
  totalCalories: number = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleForm() {
    this.visible = !this.visible;
  }

  addFood(): void {
    if (Object.keys(this.food).length !== 0) {
      this.foodList.push(this.food);
      this.food = {};
    }
    this.visible = false;
  }

  addQuantity(fooday): void {
    console.log(fooday);
    if (fooday.quantity > 0) {
      this.todayList.push(fooday);
      this.totalCalories += (fooday.quantity * fooday.calories);
    }
  }
}

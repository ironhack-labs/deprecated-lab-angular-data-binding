import { Component, OnInit } from '@angular/core';
import foods from '../../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  isHide: boolean;

  foodList: Object[];
  foodCalories: Array<number>;
  totalCalories: number;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
    this.foodCalories = [];
    this.totalCalories = 0;
  }

  foodForm(): void {
    this.isHide = !this.isHide;
  }

  handleAddFood(food) {
    this.foodCalories.push(food.calories);
    this.totalCalories = this.foodCalories.reduce((total, amount) => total + amount);
    console.log(this.totalCalories);
  }

}

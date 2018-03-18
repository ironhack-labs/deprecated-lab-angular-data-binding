import { Component, OnInit } from '@angular/core';
import foods from '../../foods';

interface Food{
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  isHide: boolean;

  foodList: Object[];
  totalCalories: number;
  foodCart: Array<Food> = [];
  foodNameOnCart: Array<string> = [];
  name: string;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
    this.totalCalories = 0;
  }

  foodForm(): void {
    this.isHide = !this.isHide;
  }

  handleAddFood(food) {
    this.totalCalories += food.calories * food.quantity;
    this.foodNameOnCart.push(food.name);
    console.log(this.foodNameOnCart);
  }

}

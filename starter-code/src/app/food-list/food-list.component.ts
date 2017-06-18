import { Component, OnInit, Input } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {

  foods = foods;
  totalCalories: number;

  constructor() {}

  ngOnInit() {
  }

  addTodaysFood(food, foodQuantity) {
    food.quantity += parseInt(foodQuantity.value);
    this.totalCalories =+ (food.calories * food.quantity)
    console.log(this.totalCalories);
    foodQuantity.value = "1";
  }

}

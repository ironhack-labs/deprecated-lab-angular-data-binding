import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = [];
  totalCalories = 0;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  addYours() {
    this.foods.push(this.newFood);
    this.newFood = [];
  }
  totalKcal(myValue, food) {
    this.totalCalories += myValue * food.calories;
    console.log (this.totalCalories);
  }
}

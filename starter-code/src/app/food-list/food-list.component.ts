import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  todayFood: Object[];
  caloriesSum = 0;

  constructor() { 
    this.todayFood = [];
  }

  ngOnInit() {
    this.foodList = foods;
  }

  addTodayFood(food) {
    this.todayFood.push(food);
    this.caloriesSum += food.calories;
  }

}

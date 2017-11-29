import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Object>;
  todaysFoods = [];
  newFood: Object = {quantity:0};
  show: boolean = false;
  totalCalories: number;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(newFood){
    this.foods.unshift(newFood);
  }

  addTodayFood(food){
    this.todaysFoods.unshift(food);
    this.sumCalories();
  }

  toggleShow() {
    this.show = !this.show;
  }

  sumCalories() {
    this.totalCalories = 0;
    this.todaysFoods.forEach(food => {
    this.totalCalories += food.calories});
  }
}

import { Component, OnInit } from '@angular/core';
import {foods} from './foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  constructor() { }
  show = false;
  foods: Object[] = foods;
  newfood = {};
  todayFoods = [];
  totalCalories = 0;
  quantity: 1;


  addFood() {
    this.show = true;
  }
  pushToFoods() {
    this.foods.unshift(this.newfood);
    this.newfood = {};
    this.show = false;
  }
  addTodayFood(food) {
 
    if (this.todayFoods.find( f => f.name === food.name)) {
      this.totalCalories += food.calories;
      food.quantity += 1;
   
    } else {
      food.quantity += 1;
      this.totalCalories += food.calories;
      this.todayFoods.push(food);
    }

  }


  ngOnInit() {
  }

}

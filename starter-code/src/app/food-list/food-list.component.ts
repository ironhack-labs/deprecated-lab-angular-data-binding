import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList = foods;
  dailyFoods: Array<any>;
  query:string;
  newFood: object;
  totalCalories: number;

  constructor() {
    this.dailyFoods = [];
    this.newFood = {};
    this.totalCalories = 0;
  }

  addDailyFood(food){
    const {name, calories, quantity} = food;
    const newDailyFood = {name, calories, quantity};

    this.totalCalories += (calories * quantity);
    this.dailyFoods.push(newDailyFood);
  }

  addFood(){
    this.foodList.unshift(this.newFood);
    this.newFood = {};
  }

  ngOnInit() {
  }

}

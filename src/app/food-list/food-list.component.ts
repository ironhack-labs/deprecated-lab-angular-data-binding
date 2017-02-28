import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
 foods: Object[];
 newFood: Object = {};
 todayFoods: Array<Object> = [];
 totalCalories: number = 0;
 quantity: number = 1;

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  addForToday(food){
    for(let i = 0; i < this.quantity; i++) {
    this.totalCalories = this.totalCalories + food.calories;
    if(this.todayFoods.indexOf(food) === -1) {
      this.todayFoods.push(food)
    }
  }
      this.quantity = 1;

  }

  addFood(){
    foodList.push(this.newFood);
    this.newFood = "";
  }
}

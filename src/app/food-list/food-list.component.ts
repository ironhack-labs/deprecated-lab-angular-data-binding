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
    let count = 0;
    for(let i = 0; i < this.quantity; i++) {
    this.totalCalories = this.totalCalories + food.calories;
    count++
  }
    this.todayFoods.push(food)
    this.quantity = 1;
    return count
  }

  addFood(){
    foodList.push(this.newFood);
    this.newFood = "";
  }
}

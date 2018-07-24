import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: Array<Object>;
  todayFoods: Array<Object> = [];
  caloriesToday: number = 0;
  formEnable: Boolean = false;
  newFood: Object = {};
  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

  addFood(newFood) {
    console.log(newFood);
    this.foodsList.unshift(newFood);
    this.formEnable=false;
  }
  addForm(){
    this.formEnable=!this.formEnable;
  }
  addFoodToday(food, q){
    food.quantity = q;
    this.todayFoods.push(food)
    this.caloriesToday = this.caloriesToday + food.calories*q;
    console.log(q)
  }
}


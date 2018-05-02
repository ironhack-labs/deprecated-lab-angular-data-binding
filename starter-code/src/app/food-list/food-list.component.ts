import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList: Array<Object> = foods;
  todaysFoodsList: Array<Object> = [];
  newFood: Object = {};
  show = false;
  caloriesCounter: number = 0;
  newFavFood: Object = {};

  constructor() { }

  ngOnInit() { }

  addFood():void {
    this.foodList.push(this.newFood);
    this.newFood = {};
  }

  toggleNew():void {
    this.show ? this.show = false : this.show = true;
  }

  addTodaysFoods(food, quantity):void {
    this.caloriesCounter += food.calories * quantity;
    this.newFavFood = {
      name : food.name,
      calories: food.calories * quantity,
      quantity: quantity
    };
    this.todaysFoodsList.push(this.newFood);
  }
}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  constructor() { }
  ngOnInit() {}

  foods:Array<Object> = foods;
  todayFood = new Array;
  totalCalories:number = 0;
  newFood: Object = {};
  add = false;

  toggleForm(){
    this.add = !this.add;
  }
  addFood(){
    this.foods.push(this.newFood);
    this.newFood = {};
    this.toggleForm();
  }
  todayAdd(food, quantity){
    let added = false;
    this.todayFood.forEach((e,i) => {
      if(e.name === food.name){
        e.quantity = parseInt(e.quantity) + parseInt(quantity)
        added = true;
      }
    });
    if(!added){
      food.quantity = quantity;
      this.todayFood.push(food);
    }
    this.totalCalories += quantity * food.calories;
  }
}

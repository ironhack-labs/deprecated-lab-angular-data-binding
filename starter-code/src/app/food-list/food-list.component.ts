import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  mySearchTerm: string;
  foodList: object[];
  newFood: object = {};
  todayCalories: number = 0;
  todayFoodList: object[] = [];
  constructor() { }

  ngOnInit() {
    this.foodList = foods;
    this.foodList.forEach((oneFood)=>{
      oneFood['quantity'] = 1;
    });
  }
  addCalories(food){
    let totalCal = food.calories * food.quantity;
    this.todayCalories += totalCal;
    this.todayFoodList.push(food);
  }
  resetCalories(){
    this.todayCalories = 0;
    this.foodList.forEach((oneFood)=>{
      oneFood['quantity'] = 1;
    });
    this.todayFoodList = [];
  }
  addFood(){
  // console.log("Add contact has been called");
  this.newFood["quantity"] = 0;
  this.foodList.push(this.newFood);
  this.newFood = {};
}
}

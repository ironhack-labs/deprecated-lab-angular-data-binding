import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  foodMenu: Object[];
  newFood: Object = {};
  totalCalories : Number = 0;
  newFoodName:string;
  newFoodCalories:string;
  newFoodImage:string;  
  newFoodQuantity:string;
  constructor() { }

  ngOnInit() {
    this.foodList = foods;
    this.foodMenu = [];
  }
  addFood(e){
    console.log("New food added");
    if(this.newFood!=undefined) {
    this.foodList.push(this.newFood);
    this.newFood = {};
    }
  }
  addMenu(food) {
    console.log("Enjoy your selection")
    this.newFood = food;
    this.foodMenu.push(this.newFood);
    this.totalCalories += food.calories;
    this.newFood = {};
  }
}

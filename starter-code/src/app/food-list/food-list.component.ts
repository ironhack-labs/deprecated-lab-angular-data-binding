import { Component, OnInit } from '@angular/core';
import {foodI} from './food-interface'
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  formActive = false;

  foodList:foodI[];
  
  newFood:foodI = {
    name:"",
    calories:0,
    image:"",
    quantity:0
  }; 
  
  todaysFoods: Object[];

  totalCal: number;

  constructor() {}

  ngOnInit() {
    this.foodList = foods;
    this.totalCal = 0;
    this.todaysFoods = [];
  }

  addFood() {
    this.newFood.calories; 
    this.foodList.push(this.newFood);
    this.formActive = false;
  }

  addTodayFood(food) {
    console.log(food)
    if(food.quantity >= 1){
      this.todaysFoods.forEach(
        (orgFood:foodI) => {if (orgFood.name == food.name)
        food.quantity += 1;
        this.totalCal += food.calories; 
      }
      )
    } else {
    this.todaysFoods.push(food);
    this.totalCal += food.calories;
    food.quantity += 1;
    }  
  }

  addNewFoodForm() {
    if(!this.formActive) {
      this.formActive = true;
    } else {
      this.formActive = false;
    }
  }
}

//https://www.trashcanswarehouse.com/assets/images/product-photos/witt/wcd32cl.jpg
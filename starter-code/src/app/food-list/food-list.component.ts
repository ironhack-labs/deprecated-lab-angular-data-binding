import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import {FilterPipe} from '../pipes/filter.pipe'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  newFoods: Object = {};
  newMenu: Object[];
  calories: Number = 0;
  constructor() { 
  }

  ngOnInit() {
    this.newMenu = [];
    this.calories = 0;
  }
  addFoods(){
    this.foods.push(this.newFoods)
    this.newFoods={};
  }

  addFoodsDay(food){
    this.newFoods = food
    this.newMenu.push(this.newFoods)
    console.log(food.calories)
    console.log(this.calories)
    this.calories += food.calories;
  }
}



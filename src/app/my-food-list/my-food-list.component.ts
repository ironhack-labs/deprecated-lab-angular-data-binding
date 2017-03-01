import { Component, OnInit } from '@angular/core';
import foodList from '../food';

@Component({
  selector: 'app-my-food-list',
  templateUrl: './my-food-list.component.html',
  styleUrls: ['./my-food-list.component.css']
})
export class MyFoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {}
  isClassVisible: false;
  todayFoodList : Array<Object> = [];
  newFoodForToday : Object = {};
  sum:number = 0;
  constructor() { }

  ngOnInit() {
    this.foods = foodList

  }

  addFood(name,calories,img){
    console.log(name, calories, img);
    this.foods.push(this.newFood);
    this.newFood = {}
  }

  addToday(name, calories, value){
  this.todayFoodList.push([name, calories]);
  }

  countCalories(todayFoodList){
    this.sum = 0;
    for( let i=0; i< this.todayFoodList.length; i++)(this.sum += this.todayFoodList[i][1]);
    // return this.sum;
  }


}

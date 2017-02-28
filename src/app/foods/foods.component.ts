import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  foods: Object[];
  newFood: Object = {};
  todaysFood: Array<Object> = [];  //Array of Food Objects set to empty array!
  totalCalories: number = 0;
  quantity: number = 1;

  constructor() { }

  ngOnInit() {
    this.foods= foodList;
  }

  addFood(){
    this.foods.unshift(this.newFood);
    console.log("addFood has been called");
    this.newFood = {
      name: '',
      calories: '',
      image: ''

    }
}

  // eatToday(food){
  //   this.todaysFood.push(food);
  //   console.log("eatToday function executed");
  //
  // }

  eatToday(food){
    for(let i = 0; i < this.quantity; i++) {
    this.totalCalories += food.calories;
  }
    this.todaysFood.push(food);
    this.quantity = 1;

  }

  // calorieCounter(food){
  //     for (var i = 0; i < todaysFood.length; i++) {
  //       return i.calories;
  //     }

  }

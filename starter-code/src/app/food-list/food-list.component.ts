import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  newFood: Object = {};
  isInputDisabled: boolean = false;
  toogleToday: boolean = false;
  todaysFood: Array<Object> = [];
  totalCalories: number;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  addFood(){
    // clear inputs
    this.foodList.push(this.newFood);
    this.newFood = {};
  }

  hideForm(){
    this.isInputDisabled = !this.isInputDisabled;
  }

  showListOrTodays(){
    this.toogleToday = !this.toogleToday;
  }

  addTodaysFood(food){
    this.todaysFood.push(food);
    this.countCalories(this.todaysFood);
  }

  countCalories(todayFoods){
      let total =0;
      for(var i=0; i<todayFoods.length; i++){
        var x = todayFoods[i].calories;
        total += x;
      }
      this.totalCalories = total;
    }

}

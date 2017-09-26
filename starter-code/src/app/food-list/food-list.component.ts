import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  newFood: Object = {};
  todayFoods: Array<Object> = [];
  countCalories: number =0;
  quantity:number;

  constructor() { }

  ngOnInit() {
  }

  isInputDisabled: boolean = false;
  appearsForm(){
    this.isInputDisabled = !this.isInputDisabled;
  }
  addFood(){
    this.foods.push(this.newFood)
    this.isInputDisabled = !this.isInputDisabled;
  }
  addTodayFoods(e){
    this.todayFoods.push(e)
    if (e.quantity <= 0) e.quantity = 1;
    this.countCalories += e.quantity*e.calories;
  }
}

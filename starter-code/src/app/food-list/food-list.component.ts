import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Object> = [];
  newFood: Object = {};
  todayFood: Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.foods = foods
  }

addFood(){
  this.foods.push(this.newFood);
  this.isInputDisabled = !this.isInputDisabled;
  console.log(this.todayFood)
}

addToday(food){
  this.todayFood.push(food)
}

  isInputDisabled: boolean = true;
  toggleInput() {
  this.isInputDisabled = !this.isInputDisabled;
  }
}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodArray : Array<Object>;
  newFood : Object = {};
  hidden : Boolean = false;
  todayFood: Array<Object> = new Array;
  totalCal: number = 0;

  constructor() { }

  toggleForm() {
    this.hidden = !this.hidden;
  }
  addFood() {
    this.foodArray.push(this.newFood);
    this.newFood = {};
    this.toggleForm();
  }
  addToday(food, quantity){
    if(quantity > 0) {
      food.quantity += parseInt(quantity);
      this.totalCal += Number(food.calories) * Number(quantity);
      if(this.todayFood.indexOf(food) == -1){
        this.todayFood.push(food);
      }
    }
  }

  ngOnInit() {
    this.foodArray = foods;
  }

}

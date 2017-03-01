import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};

  daysFood: Array<Object> = [];

  totalCalories: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  addFood(){
    this.foods.push(this.newFood);
    // clear inputs
    this.newFood = {};
  }

  addToDay(selectedFood){
    this.daysFood.push(selectedFood);
    this.daysFood.forEach( item => {
      this.totalCalories = (this.totalCalories + selectedFood.calories);
    });
  }

}

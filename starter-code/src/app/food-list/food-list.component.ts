import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  isInputClicked: boolean = true;
  todaysFood: Object[]=[];

  toggleInput() {
    this.isInputClicked = !this.isInputClicked;
  }

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  addFood() {
    console.log(this.newFood);
    this.foods.push(this.newFood);
    this.newFood = {}
    this.isInputClicked = true;
  }
  addTodaysFood(food){
    this.todaysFood.push(food);
  }
}

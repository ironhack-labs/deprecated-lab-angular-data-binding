import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Array<Object> = [{
    name: String,
    image: String,
    calories: Number
  }];
  edited = false;

  list: Array<Object> = [{
    name: String,
    calories: Number
  }];

  totalCal: Array<Number>;

  sum (){
  this.totalCal.unshift();
  }

  shopping(food) {
    this.list.unshift(food);
  }

  constructor() { }

  ngOnInit() {
    this.foods = foodsList;
  }

  show() {
    this.edited = !this.edited
  }

  addFood() {
    console.log(this.newFood);
    console.log("Add food has been called");
    this.foods.unshift(this.newFood);
    this.newFood = [{}];
  }


}

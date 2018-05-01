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

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood() {
    console.log("Add food has been called");
    // add contact to contacts list
    this.foods.push(this.newFood);
    this.newFood = {};
  }
}

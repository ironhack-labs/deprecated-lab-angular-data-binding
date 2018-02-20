import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  pattern:string = "";
  foods:Object = [];
  newFood: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood() {
    this.foods.push(this.newFood);

    console.log("Add food has been called");

    this.newFood = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }

}

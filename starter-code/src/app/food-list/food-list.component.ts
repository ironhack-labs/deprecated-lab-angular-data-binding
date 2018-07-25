import { Component, OnInit } from '@angular/core';
import foodList from '../foods';
import listFood from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};

  listFood: Object[];
  f: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
    this.listFood = listFood;
  }

  addFood(newFood){
    console.log("Add food has been called", {newFood});
    this.foods.push(newFood)
    this.newFood = {}
  }
  addFoodList(f){
    console.log("Add food List has been called", {f});
    this.listFood.push(f)
    this.f = {}
  }

}

import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Array<Object> = [];
  newFood: Object = {};
  // pattern: string;

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  addContact(){
    console.log("Add contact has been called");
    // add food to foods list
    this.foods.push(this.newFood);
    // clear inputs
    this.newFood = {};
  }

}

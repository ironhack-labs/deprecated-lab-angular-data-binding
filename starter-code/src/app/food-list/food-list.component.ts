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

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }
  addFood() {
    console.log("Add a new food");
    this.foods.push(this.newFood);
    this.newFood= {};
  }

}

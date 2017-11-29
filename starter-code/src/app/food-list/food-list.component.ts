import { Component, OnInit } from '@angular/core';
import food from '../foods';

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
    this.foods = food;
  }

  addFood() {
    this.foods.push(this.newFood);
    this.newFood = {};
  }
}

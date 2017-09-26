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
  today: any = [];

  constructor() {
    this.foods = foods;
  }

  ngOnInit() {
    this.foods = foods;
  }

  addFood() {
    this.foods.push(this.newFood);
    this.newFood = {};
    }

  addToday(food) {
  this.today.push(food);
    }
}

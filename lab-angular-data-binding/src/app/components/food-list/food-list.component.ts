import { Component, OnInit } from '@angular/core';
import foods from '../../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }

  foods: Array<any>;
  foods2: Array<any>;
  todaysfoods: Array<any>;
  newFood: any = {};
  formShowing = false;

  ngOnInit() {
    this.foods = foods;
    this.todaysfoods = [];
  }

  findFood(searchInput) {
    if (searchInput === this.foods2.name) {
      return this.foods2.name;
    }
  }

  addFood() {
    console.log(this.newFood);
    this.foods.unshift(this.newFood);
    this.newFood = {};
  }
  addToday(afood) {
    this.todaysfoods.unshift(afood);
  }
}

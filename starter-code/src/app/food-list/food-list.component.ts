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
  todaysFood: any[] = [];
  showForm = true;

  addFood() {
    console.log('Add food has been called');
    this.foods.push(this.newFood);
    this.newFood = {};
    this.showForm = true;
  }

  handleFavouriteClick(food) {
    this.todaysFood.push(food);
  }

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
}


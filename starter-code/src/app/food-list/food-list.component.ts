import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  food: Array<Object> = foods;
  favoriteFood: Array<Object> = [];
  newItem = {};
  show = false;
  buttonName = 'Show Form';
  caloriesCount = 0;
  newFood = {};
  constructor() {}

  ngOnInit() {}

  add() {
    this.food.push(this.newItem);
    this.toggle();
  }
  toggle() {
    this.show = !this.show;
    if (this.show) {
    this.buttonName = 'Hide Form';
    } else {
     this.buttonName = 'Show Form';
    }
  }
  addToFavorite(food, quantity) {
    this.caloriesCount += food.calories * quantity;
    this.newFood = {
      name : food.name,
      calories: food.calories * quantity,
      quantity: quantity
    };
    this.favoriteFood.push(this.newFood);
    console.log(this.favoriteFood);
  }
}

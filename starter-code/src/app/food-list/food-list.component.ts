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
  todaysFood = [];
  counter = 0;
  showForm = false;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  handleAddClick() {
    this.foods.push(this.newFood);
    this.newFood = {};
    this.showForm = false;
  }

  handleFavoriteClick(food) {
    this.addToTodaysFood(food);
    this.calcCalories();
  }

  private addToTodaysFood(food) {
    this.todaysFood.push(food);
  }

  private calcCalories() {
    const total = this.todaysFood.reduce((acc: number, food: any ) => acc + food.calories, 0);
    this.counter = total;
  }
}

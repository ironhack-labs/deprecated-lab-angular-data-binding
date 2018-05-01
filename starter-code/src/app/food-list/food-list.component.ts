import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  showForm = false;
  todaysFood = [];
  caloriesCount:number = 0;

  constructor() {}

  ngOnInit() {
    this.foods = foods;
  }

  addMeal() {
    this.foods.push(this.newFood);
    this.newFood = {};
    this.showForm = false;
  }

  setFavorite(food) {
    if (this.todaysFood.length === 0) {
      this.todaysFood.push(food);
    } else {
      this.todaysFood.forEach((element, index) => {
        if (food.name !== this.todaysFood[index].name) {
          this.todaysFood.push(food);
          return;
        }
        this.todaysFood[index].quantity += food.quantity;
      });
      console.log(this.todaysFood);
    }
    // food.quantity = 0;
    this.caloriesCount += (food.calories * food.quantity);
  }
}

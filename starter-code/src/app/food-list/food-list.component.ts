import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  list: Array<object>;
  todayFoods: Array<object> = [];
  caloriesToday: number = 0;
  foods = foods;
  constructor() {}
  newFood: Object = {};
  name; image; calories;
  formEnable: boolean = false;

  ngOnInit() {
    this.list = foods;
  }
  addFood(newFood) {
    this.list.unshift(this.newFood);
    this.newFood = {};
  }

  showForm() {
    this.formEnable=!this.formEnable;
  }

  addFoodToday(food, q) {
    food.quantity = q;
    this.todayFoods.push(food);
    this.caloriesToday = this.caloriesToday + food.calories*q;
  }
}

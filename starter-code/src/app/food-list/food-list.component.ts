import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foodsList: Array<object>;
  pattern: String;
  isHidden: Boolean = false;
  newFood: Object = {};
  todaysFoods: Array<Object> = []
  foodCalories: number = 0;

  constructor() {
    this.foodsList = foods;
  }

  toggleHidden() {
    this.isHidden = !this.isHidden;
  }

  ngOnInit() {}

  addFood(food) {
    this.toggleHidden();
    console.log("Add food has been called");
    this.foodsList.push(food);
    this.newFood = {};
  }

  addTodaysFoods(food, q) {
    if(!this.todaysFoods.some(e=> e['name']===food.name))this.todaysFoods.push(food);
    food.quantity += parseInt(q);
    this.foodCalories += food.quantity*food.calories
  }
}

import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  pattern: string;
  newFood: any = {};
  invisible: boolean = true;
  totalcalories: number = 0;

  todaysFood: Object[] = [];

  constructor() {
    this.foods = foods;
  }

  ngOnInit() {}

  addFood(name, calories, image, quantity) {
    this.newFood.name = name;
    this.newFood.calories = calories;
    this.newFood.image = image;
    this.newFood.quantity = quantity;

    this.foods.push(this.newFood);
    this.newFood = {};
  }

  toggleVisibility() {
    this.invisible = !this.invisible;
  }

  addToday(food) {
    food.quantity += 1;
    if (this.todaysFood.indexOf(food) == -1) {
      this.todaysFood.push(food);
    }
    this.totalcalories += food.calories;
  }
}

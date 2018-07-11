import { Component, OnInit } from "@angular/core";
import { foods, Food } from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foods: Array<Food>;
  userInput: string;
  newFood: Food = new Food();
  classState: any = {
    display: true
  };
  cravings: Array<Food>;

  constructor() {}

  ngOnInit() {
    this.foods = foods;
    this.cravings = [];
  }

  addFood() {
    console.log("Add food has been called");
    this.foods.push(this.newFood);
    this.newFood = new Food();
    this.toggleForm();
  }

  toggleForm() {
    this.classState.display = !this.classState.display;
  }

  addToCravings(oneFood) {
    this.cravings.push(oneFood);
  }
}

import { Component, OnInit } from "@angular/core";
import { Food, foodList } from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  //food: Object[];
  foods: Array<Food> = foodList;
  newFood = new Food();
  userInput: string;

  constructor() {}

  ngOnInit() {
    this.foods = foodList;
  }

  addFood() {
    this.foods.push(this.newFood);
  }
}

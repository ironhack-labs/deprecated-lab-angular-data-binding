import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foods: Array<object>;
  newFood: Object = {};

  show: Boolean = false;
  constructor() {
    this.foods = foods;
  }

  ngOnInit() {}

  addFood(name, calories, image, quantity) {
    foods.unshift({ name, calories, image, quantity });
  }

  toggle() {
    this.show ? (this.show = false) : (this.show = true);
  }
}

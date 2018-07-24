import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  products: Array<object>;
  hidden: boolean = true;
  newFood: Object = {};

  constructor() {}

  ngOnInit() {
    this.products = foods;
  }

  showForm() {
    this.hidden = !this.hidden;
  }

  add() {
    return {
      hidden: this.hidden
    };
  }

  addFood(newFood) {
    this.products.push(newFood);
    this.newFood = {};
    this.hidden = !this.hidden;
  }
}

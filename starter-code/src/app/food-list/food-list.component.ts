import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {
    name: "",
    calories: "",
    quantity: 0,
    image: ""
  };
  selectedFood: Object[] = [];
  isTransparent = true;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  createForm() {
    this.isTransparent = false;
  }

  addFood(newFood) {
    this.isTransparent = true;
    if (newFood.name !== "") {
      newFood.image = "https://avatars1.githubusercontent.com/u/5229679?s=88&v=4";
      this.foods.unshift(newFood);
      this.newFood = {};
    }
  }

  pushToSelected(food) {
    if (food.quantity !== 0) {
      this.selectedFood.push({
        name: food.name,
        quantity: food.quantity
      });
    }
    food.quantity = 0;
  }
}

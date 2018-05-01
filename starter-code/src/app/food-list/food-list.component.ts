import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  name: string = "";
  newFood: Object = {};
  total: number = 0;
  foodsNew: Array<Object> = foods;
  todayList: Array<Object> = [];
  clickForm: boolean = true;
  constructor() {}

  ngOnInit() {}

  addFood() {
    this.foodsNew.push(this.newFood);
  }

  addFoodTodayList(food, quantity) {
    this.total += food.calories * quantity.value;
    let newFood = {
      name: food.name,
      calories: food.calories,
      quantity: quantity.value
    };
    this.todayList.push(newFood);
    this.newFood = {}
  }

  showForm() {
    this.clickForm = !this.clickForm;
  }
}

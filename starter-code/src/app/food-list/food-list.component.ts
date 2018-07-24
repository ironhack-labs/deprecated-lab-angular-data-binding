import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  newFood: Object = {};
  todayFoods: Object[]=[];
  totalCalories: number=0;

  constructor() {}

  ngOnInit() {
    this.foodList = foods;
  }

  addFood() {
    this.foodList.push(this.newFood);
  }

  addTodayFood(name,q) {

    this.foodList.forEach(e => {
      if (e["name"] === name) {
        this.todayFoods.push(e);
        this.totalCalories += e["calories"]*parseInt(q);
      }
    });
  }
}

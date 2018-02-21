import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foods = [];
  newFoods: object = [];
  show: boolean = false;
  todayFood= [];
  constructor() {}

  ngOnInit() {
    this.foods = foods;
  }
  showNewFood() {
    this.show = !this.show;
  }
  AddNewFood(p) {
    this.foods.push(p);
  }
  AddTodayFood(p) {
    this.todayFood.push(p);
console.log("mamita");
  }
}

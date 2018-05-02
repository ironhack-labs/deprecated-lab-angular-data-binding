import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foodsArray: Object[];
  isInvisible: boolean;
  todayArray: Object[];
  totalCalories: number;
  bo: number;
  howMany:number

  constructor() {}

  ngOnInit() {
    this.isInvisible = false;
    this.foodsArray = foods;
    this.todayArray = [];
    this.totalCalories = 0;
    this.bo = 0;
  }
  toggle() {
    if (this.isInvisible == false) {
      this.isInvisible = true;
    } else {
      this.isInvisible = false;
    }
  }
  addFood(name, calories, image) {
    this.foodsArray.unshift({ name, calories, image });
    this.toggle();
  }
  addTodayFood(food) {
    this.todayArray.push(food);
    this.totalCalories += food.calories * this.howMany;
    this.bo = this.howMany;
    console.log(this.todayArray);
  }
}

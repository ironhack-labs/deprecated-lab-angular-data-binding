import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  list: Array<object>;
  hidden: boolean = true;
  newFood: Object = {};
  todayFood: Array<any> = [];
  totalCalories: number = 0;
  defaultValue: 1;

  constructor() {}

  ngOnInit() {
    this.list = foods;
  }

  showForm() {
    this.hidden = !this.hidden;
  }

  classes() {
    return {
      hidden: this.hidden
    };
  }

  addFood(newFood){
    this.list.push(newFood);
    this.newFood = {};
    this.hidden = !this.hidden;

  }

  addToday(newFood, quantity = 1){
    console.log(newFood)
    console.log(this.todayFood)
    for(let i = 1; i <= quantity; i++){
        this.todayFood.push(newFood);
        this.totalCalories += newFood.calories;
      }
    }
  }

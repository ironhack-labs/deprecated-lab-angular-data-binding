import { Component, OnInit } from "@angular/core";
import foods from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  name: string = "";
  total: number = 0;
  newFood: object = {}
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
    this.newFood = {
      name: food.name,
      calories: food.calories,
      quantity: quantity.value
    };

    this.todayList.push(this.newFood);
   
    this.newFood = {};
  }

  showForm() {
    this.clickForm = !this.clickForm;
  }
}

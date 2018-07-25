import { Component, OnInit } from "@angular/core";
import { foods, Food } from "../foods";

@Component({
  selector: "app-add-food",
  templateUrl: "./add-food.component.html",
  styleUrls: ["./add-food.component.css"]
})
export class AddFoodComponent implements OnInit {
  foodArray: Array<any> = foods;
  newFood: Food = new Food();
  classState: any = {
    display: true
  };
  constructor() {}

  ngOnInit() {}
  addFood() {
    this.foodArray.push(this.newFood);
    this.newFood = new Food();
    this.toggleForm();
  }

  toggleForm() {
    this.classState.display = !this.classState.display;
  }
}

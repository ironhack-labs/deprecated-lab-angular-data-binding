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
  }
}

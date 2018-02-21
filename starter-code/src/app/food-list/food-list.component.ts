import { Component, OnInit } from "@angular/core";
import foods from "../foods";
import foodList from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foods: Object[];

  constructor() {}

  ngOnInit() {
    this.foods = foodList;
  }
}

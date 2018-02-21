import { Component, OnInit } from "@angular/core";
import foods from "../foods";
import foodList from "../foods";

@Component({
  selector: "app-custom-pipes",
  templateUrl: "./custom-pipes.component.html",
  styles: []
})
export class CustomPipesComponent implements OnInit {
  today = new Date();
  foods: Array<Object> = [];
  pattern: string;
  constructor() {}
  ngOnInit() {
    this.foods = foodList;
  }
  addItem(item) {
    this.foods.push({ name: item });
  }
}

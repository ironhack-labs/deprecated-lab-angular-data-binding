import { Component, OnInit } from "@angular/core";
import foods from "../foods";
import { FoodInterface } from "../food";

class Food implements FoodInterface {
  constructor(
    public name: string,
    public calories: number,
    public image: string,
    public quantity: number = 0
  ) {}
}

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foodList: array<Food> = foods;
  showAddForm: boolean = false;
  newFood: Food = new Food;

  ngOnInit() {}

  toggleForm() {
    this.showAddForm = !this.showAddForm;
  }

  addFood() {    
    this.foodList = [...this.foodList, this.newFood];
    this.newFood = {}
    console.log(this.foodList)
    this.toggleForm();
  }
}

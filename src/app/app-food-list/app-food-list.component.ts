import { Component, OnInit } from '@angular/core';
import foods from '../food';

@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {
  foods: Array<Object>;
  newFood: Object;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(name, calories, image) {
    console.log("Food added!");
    this.newFood = {
      name: name,
      calories: calories,
      images: image
    }
    this.foods.push(this.newFood);
  }
}

import { Component, OnInit } from '@angular/core';
import foods from '../food';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  foods: Array<Object>;
  newFood: Object;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(name, calories, image) {
    this.newFood = {
      name: name,
      calories: calories,
      images: image
    }
    this.foods.push(this.newFood);
    console.log("Food added!");
  }
}

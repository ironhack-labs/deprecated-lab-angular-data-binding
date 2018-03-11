import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Array<Object> = [];
  isHidden: boolean = true;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showDiv() {
    this.isHidden = false;
  }

  addFood(name, calories, amount, image) {
    let food = {
      name: name,
      calories: calories,
      image: image,
      quantity: amount
    }
    this.foods.push(food);
    this.isHidden = true;
  }

}

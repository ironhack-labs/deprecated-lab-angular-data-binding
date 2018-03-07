import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }

  foods = foods;
  show = false;
  newFood = {};
  listFoods = [];
  numero = 0;
  totalCalories = 0;

  showFood() {
    this.show = true;
  }
   addFood() {
    this.foods.unshift(this.newFood);
    this.show = false;
    this.newFood = {};
  }
   sumFood() {
    this.numero ++;
  }
  listAll(food) {
    if (this.listFoods.find(f => f.name === food.name)) {
      food.quantity ++;
      this.totalCalories += food.calories;
    } else {
      food.quantity ++;
      this.totalCalories += food.calories;
      this.listFoods.push(food);
    }
  }

  ngOnInit() {
  }

}

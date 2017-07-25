import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Object>;
  pattern: '';
  foodform: boolean;
  newFood: Object = {};
  menu: Array<Object>;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.menu = [];
    this.foodform = false;
  }

  toggleFoodForm() {
    this.foodform = !this.foodform;
    this.newFood = {};
  }

  addFood() {
    this.foods.unshift(this.newFood);
    this.newFood = {};
    this.toggleFoodForm();
  }

  onSubmit(food) {
    this.menu.push(food);
  }

  getTotalCalories(menu) {
    console.log('menutest', menu);
  }
}

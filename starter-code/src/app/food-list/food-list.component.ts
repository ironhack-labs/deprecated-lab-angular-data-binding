import { Component, OnInit } from '@angular/core';
import comidas from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }
  show: boolean = false;
  foods: Object[] = comidas;
  newFood: Object = {};
  todaysList = [];
  totalCalories = 0;

  addFood() {
    this.show = true;
  }
  pushToFoods () {
    this.foods.unshift(this.newFood);
    this.show = false;
  }

  addToList(food, qty) {
    if(this.todaysList.find(f=>f.name === food.name)) {
      console.log(qty);
      food.quantity += parseInt(qty);
    } else {
      console.log(qty);
      food.quantity += parseInt(qty);
      this.todaysList.push(food);
    }
    this.totalCalories+=parseInt(food.calories);
  };
  ngOnInit() {
  }

}

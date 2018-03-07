import { Component, OnInit } from '@angular/core';
import comidas from './foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }
  foods: Object[] = comidas;
  show: Boolean = false;
  nuevaComida: Object = {};
  todayList = [];
  totalCalories: Number = 0;
  totalQuantity: Number = 0;

addToday(food) {
  if (this.todayList.find(comida => food.name === food.name)) {
    // this.totalQuantity++;
  }
  this.todayList.push(food);
  console.log(this.todayList);
  this.totalCalories += food.calories;

}

  addFood() {
    this.show = true;

  }

  pushToFoods() {
    this.foods.unshift(this.nuevaComida);
    this.show = false;
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent {
  foodList: Array<Object> = foods;
  newFood: Object = {};
  todaysList: Array<Object> = [];
  calories: Number = 0;

  createFood(formStatus) {
    if (formStatus.style.display == "block") {
      formStatus.style.display = "none";
    }
    else {
      formStatus.style.display = "block";
    }
  }

  addFood(formStatus) {
    this.foodList.push(this.newFood);
    this.createFood(formStatus);
  }

  todaysFood(food) {
    this.todaysList.push(food);
    this.totalCalories(this.todaysList)
  }

  totalCalories(list) {
    let sum = 0;
    for (var i = 0; i < list.length; i++){
      sum += list[i].calories
    }
    this.calories = sum;
  }

}

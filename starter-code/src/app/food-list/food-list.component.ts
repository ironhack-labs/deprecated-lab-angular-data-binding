import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  todaysFoods: Object[] = [];
  todaysCalories = 0;
  newFood: Object = {};
  buttonClicked: boolean = false;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  clickButton() {
    this.buttonClicked = !this.buttonClicked;
  }

  addFood() {
    this.foods.push(this.newFood);
    this.newFood = {};
    this.buttonClicked = false;
  }

  addToMyFood(aFood, quantity) {
    for (var i = 0; i < quantity; i++) {
      this.todaysFoods.push(aFood);
    }

    this.todaysCalories = this.sumCals(this.todaysFoods);
  }

  sumCals(foodArr) {
    var cals = 0;
    for (var i = 0; i < foodArr.length; i++) {
      cals += foodArr[i].calories;
    }
    return cals;
  }
}

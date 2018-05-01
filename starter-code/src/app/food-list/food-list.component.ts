import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];
  newFood: Object = {};
  showForm: boolean = false;
  todayFoods: Object[] = [];
  caloriesSum: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  onAddNewClick() {
    // show and hidde the form
    if (this.showForm) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
  }

  addFood() {
    // add new food to foods list
    this.foods.push(this.newFood);
    // clear inputs
    this.newFood = {};
    this.showForm = false;
  }

  addTodayFood(food) {
    this.todayFoods.push(food);
    this.caloriesSum += food.calories;
  }

}

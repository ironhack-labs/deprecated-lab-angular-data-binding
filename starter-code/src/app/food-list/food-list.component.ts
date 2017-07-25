import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[] = foods;
  todaysFoods : Object[] = [];
  newFood: Object = {};
  totalCalories : number = 0;
  showPane: boolean = false;
  showTodaysFood: boolean = this.todaysFoods.length !== 0;
  constructor() {

  }

  ngOnInit() {
  }

  showNewFoodPane(){
    this.showPane = !this.showPane;
  }

  createNewFood(){
    foods.push(this.newFood);
    this.newFood = {};
  }

  addThisFood(food){
    this.todaysFoods.push(food);
    this.totalCalories += food.calories;
  }

  removeThisFood(food){
    let index = this.todaysFoods.indexOf(food);

    this.todaysFoods = [...this.todaysFoods.slice(0, index), ...this.todaysFoods.slice(index+1)];
    this.totalCalories -= food.calories;
  }
}

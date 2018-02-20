import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {}
  showSelected : boolean = false
  feedbackEnabled = false;
  todayFoods: Object[] = [{}]
  counter: number = 0
  pattern: String;

  constructor() { 
 
    this.feedbackEnabled;

  }

  ngOnInit() {
    this.foods = foods
  }
  ShowButton(){
    this.showSelected = true;
}
  HideButton(){
    this.showSelected=false;
  }
addFood(form) {
  if (form.valid) {
    this.foods.push(this.newFood)
    this.feedbackEnabled = false
    this.newFood = {}
  } else {
    this.feedbackEnabled = true;
  }
}
addTodayFood(e) {
  this.todayFoods.push(e)
  const addCalories = Number(e.calories)
  this.counter = this.counter + addCalories

}
}

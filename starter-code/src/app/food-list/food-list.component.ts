import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Array<Object> = [];

  todaysFoods: Array<Object> = [];

  newFood: Object = {};

  formVisible: boolean = false;

  todaysCalories: number = 0;

  constructor() { }

  ngOnInit() {
  	this.foods = foods;
  }

  calculateCalories() {
  	this.todaysCalories = 0;
  	var that = this;
  	this.todaysFoods.forEach(function(currentFood:any){
  		console.log('CURRENT FOOD ', currentFood);
  		console.log('CURRENT FOOD CAL ', currentFood.calories);
  		that.todaysCalories += currentFood.calories;
  	})
  }

  addFoods(food) {
    // this.foods.push({name: food});
    this.foods.unshift(this.newFood);
    this.toggleForm();
  }

  addTodaysFoods(i) {
    console.log ("these are the foods we're trying to push", foods, i);
    console.log ("this is the to add ", foods[i]);
    this.todaysFoods.push(foods[i]);
    console.log ("Todays Foods", this.todaysFoods);
    this.calculateCalories();
    //this.todaysFoods.push();
  }

  toggleForm() {
    this.formVisible = !this.formVisible;
  }

}

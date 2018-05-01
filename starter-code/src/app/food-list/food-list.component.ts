import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: object[];
  displayAddForm: boolean = false;
  newFood: object = {};
  todaysFood: object[] = [];
  todayCalSum: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods;

  }

  addNewFoodClick() {
    // toggle showing the add new food form
    this.displayAddForm = !this.displayAddForm;
  }

  submitNewFoodClick() {
    // push newFood into food array
    foods.push(this.newFood);

    //clear inputs
    this.newFood = {};

    // toggle showing the add food form
    this.displayAddForm = !this.displayAddForm;
  }

  addtoTodaysFood(foodItem) {
    this.todaysFood.push(foodItem);
    console.log(this.todaysFood);
    
    // sum up calories
    this.todayCalSum += foodItem.calories;
  }

}

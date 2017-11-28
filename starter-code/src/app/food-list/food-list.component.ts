import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFoods: Object = {};
  edited = false;
  newTodaysFood: Array<object> = [];
  count = 0;
  show = false;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showForm() {
    this.edited = !this.edited;
  }

  addFoods(){
    console.log("Add contact has been called");
    this.foods.push(this.newFoods);
    this.newFoods = {}
    this.edited = false;

  };

  todayFood(foodSelected) {
    this.newTodaysFood.push(foodSelected);
    this.count += foodSelected.calories;
    this.show = true;
  }
}

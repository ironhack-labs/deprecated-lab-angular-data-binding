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
  newTodaysFood = [];
  count = 0;
  caloriesItems = 0;
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

  todayFood(foodSelected, quantity) {
    this.caloriesItems = 0;

    foodSelected.quantity = quantity.value;

    if(this.newTodaysFood.indexOf(foodSelected) === -1) {
      this.newTodaysFood.push(foodSelected);
    }

    this.newTodaysFood.forEach(e =>{
      this.caloriesItems += e.quantity * e.calories;
    });

// 
    this.show = true;
    // this.caloriesItems += foodSelected.calories * quantity.value;
  }
}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodsList: Object[];
  newFood: Object = {};
  showForms = false;
  totalCal = 0;
  todayFood = [];

  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

   showForm() {
     this.showForms = true;
   }
   addFood() {
    this.foodsList.push(this.newFood);
    this.newFood = {};
    this.showForms = false;
   }
   addToToday(food) {
    this.todayFood.push(food);
    this.totalCal += food.calories;
   }
}

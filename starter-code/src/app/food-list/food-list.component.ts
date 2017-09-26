import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  food: Object[];
  newFood: Object = {};
  todayFood: Array<Object> = [];
  showForm: boolean = false;
  todayCalories = 0;

  constructor() {

  }

  ngOnInit() {
    this.food = foods
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  createFood(newFood) {
    this.food.unshift(this.newFood)
    this.showForm = false;
  }

  addTodayFood(e){
    if(e.quantity==0) e.quantity =1

      this.todayFood.push(e)
    this.todayCalories+=e.calories*e.quantity
  }
}

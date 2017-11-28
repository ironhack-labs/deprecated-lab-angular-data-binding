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
  active: boolean = false;

  todayFoods: Object [] = [];
  totalCal: number = 0;

  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

  showForm() {
    this.active = !this.active;
  }

  addFoods (newFood){
    this.foodsList.push(this.newFood);
    this.newFood = {};
    this.active = !this.active
  }

  addToday(food) {
    this.todayFoods.push(food);
    this.totalCal = this.totalCal+food.calories;
  }
}

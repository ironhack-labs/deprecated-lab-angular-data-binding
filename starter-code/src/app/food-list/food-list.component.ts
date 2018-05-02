import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  formVis = false;
  newFood = {};
  todayFoods = [];
  todayFood = {};
  todayCals = 0;
  constructor() {}
  ngOnInit() {}
  showForm = () => (this.formVis = !this.formVis);
  addFood() {
    this.foods.push(this.newFood);
    this.formVis = !this.formVis;
    this.newFood = {};
  }
  addToToday(f) {
    this.todayFood = {
      name: f.name,
      calories: f.calories
    };
    this.todayFoods.push(this.todayFood);
    console.log(this.todayFood);
    this.todayCals += f.calories;
    this.todayFood = {};
  }
}

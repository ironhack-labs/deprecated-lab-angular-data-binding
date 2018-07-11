import { Component, OnInit } from '@angular/core';
import {foods} from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<object> = foods;
  todayArray: Array<any> = [];
  totalCalories: number = 0;

  constructor() { }

  ngOnInit() {
  }
  foodToday(oneFood) {
    this.todayArray.push(oneFood);
    // console.log(this.todayArray);
    this.totalCalories += oneFood.calories;
  }
}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  hideDisplay = false;
  newFood: any = {};
  foodList: any[] = [];
  mySearchTerm: string;
  todaysList: any[] = [];
  todaysCalories = 0;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  toggleDisplayAdd() {
    this.hideDisplay = !this.hideDisplay;
  }

  addFood() {
    console.log({
      name: this.newFood.name,
      calories: this.newFood.calories,
      image: this.newFood.image
    });

    foods.push({
      name: this.newFood.name,
      calories: this.newFood.calories,
      image: this.newFood.image
    });
  }

  addToToday(oneFood) {
    this.todaysList.push(oneFood);
    this.todaysCalories += oneFood.calories;
  }

}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Array<any>;
  newFood = {
    name: '',
    calories: '',
    image: ''
  };
  foodCounter = 1;
  todaysFood: Array<any> = [];
  total: number = 0;


  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood() {
    console.log('Chicken Bacon');
    const newFood = {
      name: this.newFood.name,
      calories: this.newFood.calories,
      image: this.newFood.image
    };
    this.foods.push(newFood);
  }

  addToday(name, calories){
    const foodsToday = {
      name: name,
      calories: calories,
      amount: this.foodCounter++
    };
    this.todaysFood.push(foodsToday);
    this.total += calories;
  }


}

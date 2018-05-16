import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  searchTerm: String = '';
  resultsArray: Array<any> = [];
  foods: Array<any>;
  newFood = {name: '', calories: '', image: ''};
  foodCounter = 1;
  todaysFood: Array<any> = [];
  total: number = 0;
  isShowing:boolean = false;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.resultsArray = this.foods;
  }

  activeFoodWindow(){
    this.isShowing = !this.isShowing;
  }

  addFood() {
    console.log('Chicken Bacon');
    const newFood = {
      name: this.newFood.name,
      calories: this.newFood.calories,
      image: this.newFood.image
    };
    this.foods.push(newFood);
    this.newFood = {name: '', calories: '', image: ''};
    this.isShowing = false;
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

  filterFoods() {
    this.resultsArray = this.foods.filter((food =>{
      return food.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    }));
    console.log(this.searchTerm)
  }


}

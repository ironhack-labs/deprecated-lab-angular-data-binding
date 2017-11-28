import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<object>;
  newFood: Object = {};
  todaysFood: Array<object> = [];
  show: Boolean = false;
  calorieCounter:number = 0;
  counter: number = 0;
  showCouter: Boolean = false;

  constructor() {}

  addItem(newFood){
    console.log("Add contact has been called");
    this.foods.unshift(newFood);
    this.newFood = {};
    this.show = false;
  }

  formShow(){
    this.show = true;
  }

  addFavFood(foodFav){
    console.log(`${foodFav.name} añadido a lista`);
    console.log(this.foods);
    this.todaysFood.push(foodFav);
    this.calorieCounter += foodFav.calories;
  //  this.foods.quantity += this.counter;
    this.showCouter = true;
  }

  ngOnInit() {
    this.foods = foods;
  }

}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  myFoods = foods
  newFood = {}
  todaysFood = []
  totalCalories = 0
  constructor() {
  }
  showForm(elem){
    elem.classList.remove("hidden")
  }
  addFood(){
    foods.unshift(this.newFood)
  }
  todayFood(food, calories){
    this.todaysFood.push(food)
    this.totalCalories += calories
  
  }
  setQuantity(qt, food, calories){
    if(qt === 0) qt = 1
    food.quantity = qt
    calories *= 3
    this.todayFood(food, calories)


  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Object>;
  todaysFoods = [];
  newFoodForm = false;
  newFood: Object = {}
  totalCalories = 0;
  constructor() {

  }

  ngOnInit() {
    this.foods = foods
  }

  createNewFood(){
    this.newFoodForm = !this.newFoodForm;
  }
  submitNewFood(){
    if(!this.newFood){
      return;
    }

    this.foods = this.foods.slice()//Trigger change in dom
    const copy = Object.assign({}, this.newFood)//Clone
    this.newFood = {}//clean the form
    this.foods.push(copy)//add to list
    this.newFoodForm = false//Hide form

  }

  addFoodForToday(food){
    const searchIndex = this.todaysFoods.indexOf(food)
    if ( searchIndex > -1 ){
      this.todaysFoods[searchIndex].quantity ++;
    }else{
      food.quantity ++;
      this.todaysFoods.push(food)
    }
    this.totalCalories += food.calories

  }
}

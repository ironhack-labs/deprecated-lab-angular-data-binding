import { Component, OnInit } from '@angular/core';
import foods from '../foods';

class Food {
  name:string;
  calories:number;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  pattern:string;
  showForm:boolean = false;
  todaysFoods: Object[] = [];
  todaysFood: Object = {
    name : "",
    calories : 0,
  }
  totalCalories: number = 0;
  constructor() { 
   
  }

  ngOnInit() {
    this.foods = foods;
  }
  toggleForm(){
    this.showForm = !this.showForm;
  }
  addFood(){
    this.foods.push(this.newFood)
  }
  addTodayFood(food:Food){
    console.log(food.calories);
    this.totalCalories += food.calories;
    this.todaysFoods.push(food)
  }
}

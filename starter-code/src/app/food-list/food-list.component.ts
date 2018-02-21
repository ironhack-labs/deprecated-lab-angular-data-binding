import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods = foods;
  status:boolean = false;
  newFood : Object = {}
  calories:number = 0;
  newCalories: Object[]

  constructor() { 

  }

  ngOnInit() {
    this.foods = foods;   
    this.calories = 0;
    this.newCalories = []
  }
  toggleFrom(){
    this.status = !this.status;
  }

  addFood(){
    this.foods.push(this.newFood);
  }

  gettotalCalories(food){
    this.newFood = food
    this.newCalories.push(this.newFood)
    this.calories += food.calories;
  }

}

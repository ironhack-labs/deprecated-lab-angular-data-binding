import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foods: Array<Object>
  newFood : Object
  listFood: Array<Object>
  calories=0
  quantity=1
  isTurnedOn : boolean = false

  constructor() {
    this.newFood = {}
    this.foods = foods
    this.listFood = []


  }

  ngOnInit() {}

  addFood(){
    this.foods.push(this.newFood)
    console.log("works")

  }

  addFoodList(food){
    this.listFood.push(food);
    this.calories += food.calories;
    this.calories = this.quantity * this.calories
    console.log("dajeeeee")
  }

  showForm(){
      this.isTurnedOn = !this.isTurnedOn
  }
}

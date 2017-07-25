import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  Todayfoods: Object[] = [];
  calories: Array<number> = [];
  caloriesAverage: any;
  foods: Object[] = foods;
  newFood: Object = {};
  totalCalories:number=0;
  constructor() { }

  ngOnInit() {
    this.foods = foodsList;
  }
  addFood() {
    console.log("Add Food has been called");

    let newFood = {
      name: this.newFood['name'],
      image: this.newFood['image'],
      calories: this.newFood['calories'],
      quantity: this.newFood['quantity']
    }
    foods.push(newFood);

    this.newFood = {};
  }

  addFoodToday(food) {
    this.Todayfoods.push(food);
    console.log(this.Todayfoods);
    this.calories.push(food['calories']);
    this.caloriesAverage=this.calories.reduce(function(a, b) { return a + b; });
    console.log(this.caloriesAverage);
  }
}

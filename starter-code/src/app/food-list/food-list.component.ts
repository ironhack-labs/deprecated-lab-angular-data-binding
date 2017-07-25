import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Object>;
  formClass: string = 'form';
  newFood: Object = {};
  show: boolean = false;
  todayFoods: Array<Object> = [];
  total: number = 0;
  quantity: number = 1;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  addFood() {
    this.show = !this.show;
    if(Object.keys(this.newFood).length !== 0) this.foods.push(this.newFood);
    this.newFood = {};
  }
  addFoodForm() {
    this.show = !this.show;
  }
  addTodayFood(food) {
    this.todayFoods.push(food);
    food.quantity+= this.quantity;
    this.total+= food.calories*food.quantity;
  }
}

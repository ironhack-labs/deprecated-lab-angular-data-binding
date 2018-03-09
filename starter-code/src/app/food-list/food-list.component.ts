import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { Food } from '../interfaces/food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Food>;
  newFood: Food = {
    image: '',
    name: '',
    calories: 0,
    quantity: 0
  };
  totalCalories: number = 0;
  todayFoods: Array<Food> = [];
  classForm: string = 'no-active';
  pattern;

  ngOnInit() {
    this.foods = foods.reverse();
  }
  showForm() {
    this.classForm = 'active';
  }
  addFood(food: Food) {
    console.log(food.name)
    this.foods.unshift(this.newFood);
    this.classForm = 'no-active';
  }
  addFoodList(food: Food, index: number, todayFoods: Food) {
    this.todayFoods.unshift(food);
    console.log(this.totalCalories)
    this.totalCalories += this.todayFoods[0].calories * food.quantity;
  }

  removeFoodList(index: number, todayFoods: Food) {
    console.log(this.todayFoods[index].calories);
    this.totalCalories -= this.todayFoods[index].calories;
    this.todayFoods.splice(index, 1);
  }
}

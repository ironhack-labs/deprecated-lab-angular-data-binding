import { Component, OnInit } from '@angular/core';
import foods, { Food } from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodsList: Food[] = foods;
  todayList: Food[] = [];
  searchTerm: string;
  addingOn: boolean = false;
  food: Food = {
    name: "",
    calories: 0,
    image: "",
    quantity: 0
  };
  caloriesCount: number;
  constructor() { }

  ngOnInit() {
  }

  // toggle the display of form to add a new food
  newFood() {
    this.addingOn = !this.addingOn;
  }

  // Add a new food to the foodsList array
  saveNewFood() {
    if(this.food.name && this.food.calories && this.food.image) {
      const currentFood = new Food(
          this.food.name,
          this.food.calories, 
          this.food.image, 
          this.food.quantity);
      this.foodsList.push(currentFood);
      this.food.name = "";
      this.food.calories = 0;
      this.food.image = "";
      this.food.quantity = 0;
      this.newFood();
    }
  }

  // Add a food to Today's food array
  addToday(food: Food) {
    if(this.todayList.indexOf(food) !== -1) {
      this.todayList.splice(this.todayList.indexOf(food), 1);
    }
    food.quantity === 0 ? food.quantity = 1: null;
    this.todayList.push(food);
    this.updateCalories();
  }
  
  // keep calories count up to date
  updateCalories() {
    let todayCalories = 0;
    this.todayList.forEach(oneFood => {
      todayCalories += oneFood.calories * oneFood.quantity;
    });
    this.caloriesCount = todayCalories;
  }

  // remove a food from today's food array
  removeFood(food: Food) {
    this.todayList.splice(this.todayList.indexOf(food), 1);
    food.quantity = 0;
    this.updateCalories();
  }
}

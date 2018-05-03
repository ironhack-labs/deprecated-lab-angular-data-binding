import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  isAddFood: boolean = false;
  userInput: string;
  foodList: Array<Object> = foods;
  newFood: Object = {};
  todayList: Array<Food> = [];
  totalCalories: number = 0;
  foodQuantity: number;

  constructor() { }

  ngOnInit() {
  }

  displayAddFood() {
    this.isAddFood = !this.isAddFood;
  }

  addFood() {
    this.foodList.unshift(this.newFood);
    this.displayAddFood();
  }

  addToday(name: string, calories: number, image: string, quantity: number) {
    
    this.updateCalories(calories, quantity);

    for(var i = 0; i < this.todayList.length; i++) {
      if(this.todayList[i].name === name) {
        this.todayList[i].quantity = this.todayList[i].quantity + quantity;
        return;
      }
    }

    const foodToAdd: Food = new Food(name, calories, image, quantity);
    this.todayList.unshift(foodToAdd);
  }

  updateCalories(calories: number, quantity: number) {
    this.totalCalories = this.totalCalories + (calories * quantity);
  }


}

class Food {
  constructor(
    public name: string,
    public calories: number,
    public image: string,
    public quantity: number
  ) { }
}
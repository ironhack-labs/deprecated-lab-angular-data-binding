import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { FormsModule, Validators } from '@angular/forms';

interface Food {
  name: string;
  calories: number;
  quantity: number;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['../app.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: any[] = foods;
  showForm: Boolean = false;
  food: object = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0
  };
  pattern: string;
  totalCalories = 0;
  foodListCart: Array<Food> = [];
  constructor() {}
  ngOnInit() {}

  addFood(food) {
    this.foodList.push(food);
    this.showForm = false;
  }

  calculateCalories() {
    this.totalCalories = 0;
    this.foodListCart = [];
    this.foodList.forEach(item => {
      if (item.quantity > 0) {
        this.foodListCart.push(item);
        this.totalCalories += item.calories * item.quantity;
      }
    });
  }

  addTodaysFood(foodItem) {
    this.foodList[this.foodList.indexOf(foodItem)].quantity = foodItem.quantity;
    this.calculateCalories();
  }
}

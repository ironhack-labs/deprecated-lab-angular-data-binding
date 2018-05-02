import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<Object> = foods;
  food: Object = {};
  showForm = false;
  specialFoods = [];
  totalCalories = 0;
  count = {};
  constructor() { }

  ngOnInit() {

  }

  addFood() {
    this.foodList.push(this.food);
    this.food = {};
    this.showForm = false;
  }

  formShow() {
    this.showForm = true;
  }
  
  addSpecial(food) {
    console.log(food)
    for (let index = 0; index < food.quantity; index++) {
      this.specialFoods.push(food);
      this.totalCalories += food.calories;
    }
    this.specialFoods.forEach((food) => {
      this.count[food.name] = (this.count[food.name] || 0) + 1;
    });
  }
}


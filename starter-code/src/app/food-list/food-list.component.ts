import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  showForm = false;
  name = '';
  calories = '';
  image = '';
  quantity = '';
  foods: Object[];
  todayFoods: any[] = [];

  handleAddClick() {
    this.foods.push({
      // ITS BETTER TO HAVE AN OBJECT AND THEN U WOULD ONLY PASS TODAYFOODS
      name: this.name,
      calories: this.calories,
      quantity: this.quantity,
      image: this.image
    });
    this.name = '';
    this.calories = '';
    this.quantity = '';
    this.image = '';
  }

  handleAddTodayClick(food) {
    this.todayFoods.push(food);
  }
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
}

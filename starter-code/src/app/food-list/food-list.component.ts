import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  todayFood: Object[] = [];
  showForm: Boolean = false;
  feedbackEnabled: Boolean = false;
  constructor() {}

  ngOnInit() {
    this.foods = foods;
  }

  triggerForm() {
    if (this.showForm) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
  }

  addNewFood(form) {
    if (form.valid) {
      this.foods.push(this.newFood);
      this.newFood = '';
      this.showForm = false;
      this.feedbackEnabled = false;
    } else {
      this.feedbackEnabled = true;
    }
  }

  addTodayFood(food) {
    this.todayFood.push(food);
  }
}

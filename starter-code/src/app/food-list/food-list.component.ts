import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  pattern: string;
  addForm = false;
  todaysFoods: Array<Object> = [];
  totalCalories = 0;
  itemQuantity: Object = {};

  constructor() { }

  ngOnInit() {
  }

  // toggles the add new foods form
  toggleForm() {
    if (!this.addForm) {
      this.addForm = true;
    } else {
      this.addForm = false;
    }
  }

  // adds a new food
  addItem(item) {
    this.foods.push(item);
    this.toggleForm();
  }

  // adds to an array of items which are today's food
  addToToday(item, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.todaysFoods.push(item);
      this.totalCalories += item.calories;
      this.addToCountObject(item);
    }
  }

  // add to an object which counts how many of each item have been selected
  addToCountObject(item) {
    if (!this.itemQuantity[item.name]) {
      this.itemQuantity[item.name] = 1;
    } else {
      this.itemQuantity[item.name] ++;
    }
  }

}

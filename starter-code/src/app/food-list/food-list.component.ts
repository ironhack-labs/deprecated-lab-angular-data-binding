import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  showAdd = false;
  pattern: string;
  todayList = [];

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addItem(name, calories, image) {
    this.foods.push({
      name: name,
      calories: calories,
      image: image
    });
    name = '';
    calories = '';
    image = '';
    this.showAdd = false;
  }

  addTodayList(food) {
    this.todayList.push({
      name: food.name,
      calories: food.calories
    });
  }

}

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
  list: [
    {
      name: String,
      calories: number
    }
  ];

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

  addList(name, calories) {
    console.log(name);
    console.log(calories);
    this.list.push({
      name: name,
      calories: calories
    });
  }

}

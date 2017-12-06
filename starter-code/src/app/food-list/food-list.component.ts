import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  today = new Date();
  foods: Array<Object> = [];
  pattern: string;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addItem(name) {
    this.foods.push({name: name});
  }
}

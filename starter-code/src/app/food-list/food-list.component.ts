import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})

export class FoodListComponent implements OnInit {
  foods: Object[];
  pattern: string;
  name: Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(item) {
    this.name.push({name: item});
  }
}
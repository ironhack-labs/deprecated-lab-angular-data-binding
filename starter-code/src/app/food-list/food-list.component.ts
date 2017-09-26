import { Component, OnInit } from '@angular/core';
import { foods } from './foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  listOfFoods: Object[] = foods;
  todayFoods: Object[] = [];

  constructor() { }

  ngOnInit() {
  }

  count: number = 0;

  addToToday(selected) {
    selected.quantity = this.quantity;
    this.todayFoods.push(selected);
    this.count += (selected.calories * this.quantity);
  }

  quantity: number = 1;

}

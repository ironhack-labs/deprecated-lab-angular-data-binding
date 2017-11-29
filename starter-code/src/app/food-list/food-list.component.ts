import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  newFood: Object = {}; // empty object
  terms = null;
  displayForm = true;
  displayList = false;
  dailyList: Object[] = [];
  constructor() { }

  ngOnInit() {
  }

  showForm() {
    if (this.displayForm) {
      return this.displayForm = false;
    }else {
      return this.displayForm = true;
    }
  }

  addFood() {
    console.log('Does it do sth')
    this.foods.push(this.newFood);
    this.newFood = {};
  }

  hideList() {
    if (this.displayList) {
      return this.displayList = false;
    }else {
      return this.displayList = true;
    }
  }

  addToDailyList(food): void {
    // let index = foods.indexOf(food);
    this.dailyList.push(food);
  }
}

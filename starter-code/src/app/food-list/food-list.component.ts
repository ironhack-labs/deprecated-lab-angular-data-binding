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
  displayForm = false;
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
}

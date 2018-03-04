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
  classForm: String = 'no-active';
  constructor() { }

  ngOnInit() {
    this.foods = foods.reverse();
  }
  showForm() {
    this.classForm = 'active';
  }
  addFood() {
    // add contact to contacts list
    this.foods.unshift(this.newFood);
    this.classForm = 'no-active';
  }
}

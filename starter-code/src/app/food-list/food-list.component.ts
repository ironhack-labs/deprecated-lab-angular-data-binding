import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
 })
 export class FoodListComponent implements OnInit {
  foodsArray: Object[];
  newFood: Object = {};
  todaysFood: Array<Object> = [];
 
  constructor() {}
 
  ngOnInit() {
    this.foodsArray = foods;
  }
  addFood() {
    console.log('Add food has been called');
    this.foodsArray.push(this.newFood);
 
    // add contact to contacts list
    // clear inputs
  }
  addToItemList(item) {
    this.todaysFood.push(item);
    console.log('my todays food list:', this.todaysFood);
  }
 }

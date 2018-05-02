import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({

  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  sideList: Object[] = [];
  newFood: Object = {};
  newSideListItem: Object = {};
  totalCalories: number = 0;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;

  }


  addToList() {
    this.foodList.push(this.newFood)
    this.newFood = {};
  }

  addToSidebar(name,calories) {
    this.newSideListItem = {name,calories}
    this.sideList.push(this.newSideListItem);
    this.updateCalories(calories);
    this.newSideListItem = {};
  }

  updateCalories(calories){
    this.totalCalories += calories;
  }

}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  constructor(){}

  foods: Object[];
  newFood: Object = {};
  myMenu: Array<any> = [];
  notEmpty: boolean = false;
  totalCalories: number = 0;
  myMenuIndexesAdded: Array<number> = [];
  indexClicked: number;
  visible: boolean;

  ngOnInit() {this.foods = foods}
  addFood() {
    this.newFood['quantity'] = 1;
    this.foods.push(this.newFood);
    this.newFood = {};
    this.visible = false;
  }
  addMenu(food) {
    this.notEmpty = true;
    this.indexClicked = foods.indexOf(food);
    if (this.myMenuIndexesAdded.indexOf(this.indexClicked) === -1) {
      this.myMenuIndexesAdded.push((foods.indexOf(food)));
      this.myMenu.push(food);
    } else {
      let idx = this.myMenuIndexesAdded.indexOf(this.indexClicked);
      this.myMenu[idx].quantity += food.quantity
    }
    this.totalCalories += (food.calories * food.quantity);
  }
}



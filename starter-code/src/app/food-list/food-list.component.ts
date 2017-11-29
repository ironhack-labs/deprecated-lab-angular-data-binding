import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
 foods = foods;
 search = null;
 newFood: object = {};
 dailyMenu: object[] = [];
 displayForm = false;
 totalCalories = 0;
 newArray: object[] = [];

  constructor() { }

  ngOnInit() {
  }

  showForm():boolean {
    if (this.displayForm) {
      return this.displayForm = false;
    }
    else {
      return this.displayForm = true;
    }
  }

  addFood():void{
    this.foods.push(this.newFood);
    this.newFood = {};
    this.displayForm = false;
  }

  addToMenu(food):void{
    this.dailyMenu.push(food);
    this.totalCalories += food.calories;
  }

}

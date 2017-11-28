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

  constructor() { }

  ngOnInit() {
  }

  showForm():boolean {
    console.log('hello');
    if (this.displayForm) {
      return this.displayForm = false;
    }
    else {
      return this.displayForm = true;
    }
  }

  addFood():void{
    console.log('button clicked');
    this.foods.push(this.newFood);
    this.newFood = {};
    this.displayForm = false;
  }

  addToMenu(i):void{
    this.dailyMenu.push(this.foods[i]);
    console.log(this.foods[i])
    this.totalCalories += this.foods[i].calories;
  }

}

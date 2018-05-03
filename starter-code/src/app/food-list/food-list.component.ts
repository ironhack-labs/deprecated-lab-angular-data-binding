import { Component, OnInit } from '@angular/core';
import { foodList, Food} from '../foods';


@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Food> = foodList;
  newFood = new Food();
  todays = new Food ();
  classState: any = { 
    isHiden: true
  };

  todaysFood: Array<Food> = [];

  totalCal: 0;
  
  constructor() { }

  ngOnInit() {
  }

  toggleAddClass() {
    this.classState.isHiden = !this.classState.isHiden;
  }

  
  addNewFood() {
    this.foods.push(this.newFood);
  }

  addToTodays(x) {
     this.todaysFood.push(x);
     this.todays.calories += this.totalCal;
  }

}

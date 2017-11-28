import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
    foodlist: Object[];
    newFood: Object = {};
    pushed: boolean = false;
    todayList: Object[] = [];
    sumCalories:number = 0;

  constructor() { }

  ngOnInit() {
    this.foodlist = foods;
  }

  addFood(){
    this.foodlist.push(this.newFood)
    this.newFood = {};
  }

  changedButton(){
    this.pushed =! this.pushed;
  }

  addTodayList(food){
    this.todayList.push(food);
    this.sumCalories = this.sumCalories+food.calories;
    console.log(this.todayList)
  }
}

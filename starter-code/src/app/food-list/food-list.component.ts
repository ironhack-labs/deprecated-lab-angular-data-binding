import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { SummaryResolver } from '@angular/compiler';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<any> = foods;
  userInput: string;
  dailyList: Array<any> = [];
  totCalories: Number = 0;
  constructor() { }

  ngOnInit() {}

daily(food){
  this.dailyList.push(food);
  console.log(this.dailyList);
  this.totCalories += food.calories;

}
}


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
  totCalories: number = 0;
  quantity: Number = 1;
  constructor() { }

  ngOnInit() {}

daily(food, input){
  this.dailyList.push(food);
  console.log(this.dailyList);
  food.quantity += parseInt(input.value);

  this.totCalories += (food.calories * input.value);

}
}


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
  food: String;
  todayList: Object[];

  constructor() { }

  ngOnInit() {
    this.foods= foods;
    this.todayList= [];
  }

  addFood(){
    this.foods.push(this.newFood);
    this.newFood={};
  }

  addTodayList(food){
    this.food=food;
    this.todayList.push(food);
  }

}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<Object> = foods;
  todayList: Array<Object> = [];
  newFood: Object = {};
  caloriesCount: number = 0;
  isNewFood: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleInput(){
    this.isNewFood = !this.isNewFood;
  }
  addFood(){
    this.foodList.unshift(this.newFood);
    this.newFood = [];
  }
  addToday(food){
    this.todayList.unshift(food);
    this.caloriesCount += food.calories;
  }

}


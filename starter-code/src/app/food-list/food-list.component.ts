import { Component, OnInit } from '@angular/core';
import comidas from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }
  show = false;
  foods:Object [] = comidas;
  newFood = {};
  todayList = [];
  totalCalories = 0;

addToday(food){
 this.todayList.find(f=>f.name===food.name);
 this.todayList.push(food);
 console.log(this.todayList);
 this.totalCalories+=food.calories;
}

  addFood(){
  this.show = true;

  }
  pushFood(){
    this.foods.unshift(this.newFood);
    this.show = false;
  }

  ngOnInit() {
  }

}

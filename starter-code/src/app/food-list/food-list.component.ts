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
  todaysFoods: Object[]
  todayItem: Object = {};


  constructor() { }
  ngOnInit() {
    this.foods = foods;
  }

  addFood(){
    // add contact to contacts list
    this.foods.push(this.newFood);
    
    // clear inputs
    this.newFood = ""
  }
  addToday(){
    this.todaysFoods.push(this.todayItem)
  }

}

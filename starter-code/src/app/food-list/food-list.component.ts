import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  today: Object[];
  newFood: Object = {};
  todayFood: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    
    }
  
  addFood(newFood){
    console.log(newFood);
    this.foods.push(newFood)
  }
  addToToday(todayFood){
    console.log(todayFood);
    this.today.push(todayFood);
    console.log(this.today)
  }

}

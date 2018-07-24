import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  
  foods: Array<Object> = foods;
  inputDisabled: boolean = false;
  newFood: Object = {};
  
  newList: Array<Object> = [];
  totalCal: number = 0;

  constructor() { 
    //this.foods = foods;
  }
  
  ngOnInit() {
  }

  addNewFood(add){
    if (this.inputDisabled){
      this.foods.push(add);
      this.newFood = {};
    } 
    
    this.inputDisabled = !this.inputDisabled;
  }

  todayList(food){
    food.quantity += 1;
    if (this.newList.indexOf(food) == -1) {
      this.newList.push(food);
    }
    this.totalCal += food.calories;
  }
}

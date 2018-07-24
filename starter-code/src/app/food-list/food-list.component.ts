import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { foodItem } from './food.interface';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  
  foodList: Array<Object> = [];
  todayFood: Array<Object> = [];
  foodItem: Object = {};
  toggleAddItem: boolean = false;
  caloriesConsumed: number = 0;

  ngOnInit() {
    this.foodList = foods;
  }

  toggleAdding(){
    this.toggleAddItem = !this.toggleAddItem;
  }

  addTodayFood(item: foodItem){
    this.caloriesConsumed += item.quantity*item.calories;
    this.todayFood.push(item);
  }

  addItem(){
    this.foodList.push(this.foodItem);
    this.foodItem = {}
    this.toggleAdding();
  }
}

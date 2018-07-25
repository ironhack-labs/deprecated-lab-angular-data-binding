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
  todayFood: Array<foodItem> = [];
  foodItem: Object = {};
  toggleAddItem: boolean = false;
  caloriesConsumed: number = 0;

  ngOnInit() {
    this.foodList = foods;
  }

  toggleAdding() {
    this.toggleAddItem = !this.toggleAddItem;
  }

  addTodayFood(item: foodItem) {
    let copyObj: foodItem = {
      name: '',
      quantity: 0,
      image: '',
      calories: 0
    };

    Object.assign(copyObj, item);
    if (this.todayFood.indexOf(copyObj) != -1) {
      this.todayFood[this.todayFood.indexOf(copyObj)].quantity++;
    } else {
      if(copyObj.quantity<=1){
        copyObj.quantity = 1
      }
      this.todayFood.push(copyObj);
    }
    this.caloriesConsumed += copyObj.quantity * copyObj.calories;
  }

  addItem() {
    this.foodList.push(this.foodItem);
    this.foodItem = {}
    this.toggleAdding();
  }
}

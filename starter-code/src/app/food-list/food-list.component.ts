import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList:any[] = foods;
  newFood:Object = {};
  formVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  formShow() {
    this.formVisible = true;
  }

  addFood(foodName, foodCalories, foodImage) {
    this.foodList.push(this.newFood);
    this.newFood = {};
    return false
  }


}

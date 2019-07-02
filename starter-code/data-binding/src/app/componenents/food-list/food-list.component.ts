import { Component, OnInit } from '@angular/core';
import {Food} from './../../shared/models/food.model';
import foodData from './../../shared/data/foods.data';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent{
foods: Array<Food> = foodData;
createForm: boolean = false;
newFood: Food = new Food();
todayFoods: Array<Food> = [];

onClickCreateForm():void {
this.createForm = !this.createForm;
}

onClickCreateFood():void {
this.foods.push(this.newFood);
this.newFood = new Food();
}

onClickAddTodayFood(food):void {
  this.todayFoods.push(food);
}

}

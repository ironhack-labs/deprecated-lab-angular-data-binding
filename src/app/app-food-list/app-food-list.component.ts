import { Component, OnInit } from '@angular/core';
import foodList from "../foods";

@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {

  foods: Object[];
  newFood: Object = {};
  isAddFormHidden: boolean = true;
  todaysFoods: String[] = [];
  totalCalories: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  toggleAddForm(event){
    this.isAddFormHidden = !this.isAddFormHidden;
  }

  addFood(){
    this.foods.push(this.newFood);
    this.newFood = {};
  }

  addToTodaysFoods(foodName: string, foodCalories: number){
    this.todaysFoods.push(foodName);
    this.totalCalories += foodCalories;
  }

}

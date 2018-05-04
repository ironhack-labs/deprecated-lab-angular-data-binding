import { Component, OnInit } from '@angular/core';
import { Food, foodList, todayFoodList } from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Food> = foodList;
  todayFoodList: Array<Food>
  userInput: string;
  //foods: Object[];
  newFood: any = {};

  classState: any = {
    showForm: true,
  }; 

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
    this.todayFoodList = todayFoodList;
  }

  addFood () {
    this.classState.showForm = !this.classState.showForm;
  }

  submitFood () {
    console.log("A new food has been submited to array");
    this.foods.push(this.newFood);
    this.classState.showForm = !this.classState.showForm;
    //console.log(this.foods);
  }

  addTodayFood(oneFood: Food) {
    this.todayFoodList.push(this.newFood);
    console.log("A new food has been submited to today's food array");
    console.log(oneFood);
  }
}



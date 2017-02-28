import { Component, OnInit } from '@angular/core';
import foods from '../foods';
@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {
  foodsList: Object[];
  newFood: Object  = {};
  foodsToEat:String[]=[];
  totalOfCalories: number=0;
  isInputDisabled: boolean = true;
  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
    console.log(this.foodsList);
  }
  openForm(){
    this.isInputDisabled = !this.isInputDisabled;
  }

  addFood(){
    console.log("Add food has been called");
    // add contact to contacts list
    foods.push(this.newFood);
    // clear inputs
    this.newFood={};
    this.isInputDisabled = !this.isInputDisabled;
    console.log(foods);
  }

  addFoodToList(foodName:string,foodCalores:number){
    console.log("Food "+foodName+" added to menu for eat");
    this.foodsToEat.push(foodName);
    this.totalOfCalories +=foodCalores;
    console.log("Food "+foodName+" added to menu for eat");

  }


}

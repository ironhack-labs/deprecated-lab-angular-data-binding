import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {


  foods: Object[];

  todaysFoods: Array<any> = [];

  newFoodItem =  {name: '', calories: '', image: ''};
 
  total = 0;
  
  constructor() {
   }

  addFood() {
    //   console.log('Added food item');
    this.foods.push(this.newFoodItem);
    // const newFoodItem = {name: this.newFoodItem.name, calories: this.newFoodItem.calories, image: this.newFoodItem.image };
      // add contact to contacts list
      // clear inputs
    }
  
    selectFood(foodItem) {
    // console.log(foodItem);
    this.todaysFoods.push(foodItem);
    this.total += foodItem.calories;
    console.log(this.total);
   
    // const selectedFood = {name: this.selectedFood.name, calories: this.selectedFood.calories, image: this.selectedFood.image };
  }

  ngOnInit() {
    this.foods = foods;
  }




}

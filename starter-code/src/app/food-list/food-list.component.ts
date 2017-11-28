import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFoods: Array<Object> = [{
    name: String,
    calories: Number,
    image: String,
    quantity: Number
  }];
  edited = false;
  todaysFood: Object[] = [];
  totalCals: Number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFoods() {
    this.edited = !this.edited;
    }

  addNewFoods(){
    console.log(this.newFoods);
    console.log("Add contact has been called");
    this.foods.unshift(this.newFoods);
    // add contact to contacts list
    // clear inputs
    this.newFoods = [{}];
  }
  addItem(e){
    console.log(e)
    this.todaysFood.push(e);
    this.totalCals += e.calories;
  }
}

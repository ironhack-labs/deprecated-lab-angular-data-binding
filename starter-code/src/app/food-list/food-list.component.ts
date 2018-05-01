import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  showForm: false;
  todayMeal: Object[] = [];
  count: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foodsList;
  }

  addFood(){
    console.log("Add food has been called");
    this.foods.push(this.newFood)
    // clear inputs
    this.newFood = {};
    // don't show form
    this.showForm = false;
  }

  addTodayFood(food, index){
    console.log("Add today food has been called");
    // add quantity
    food.quantity++;
    // special list
    if (food.quantity == 1){
      this.todayMeal.push(food);
    }
    // this.todayMeal[index] = (food)
    console.log(this.todayMeal)
    // count calories
    this.count += food.calories;
    

  }

  

}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Array<Object>;
  todaysFood: any = [];
  newFood: Object = {
    quantity: 0
  }
  isInputDisabled: boolean = true;
  showTotal:number;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showForm () {
    this.isInputDisabled = !this.isInputDisabled;
  }

  addFood() {
    this.foods.push(this.newFood)
    this.newFood = ""
    this.showForm();

  }

  addTodaysFood(food) {
    this.todaysFood.push(food)
    console.log(this.todaysFood)
    this.totalCalories(this.todaysFood);
  }

  totalCalories(todaysFood) {
    let total = 0
    for (let i = 0; i < todaysFood.length; i++) {
      total += todaysFood[i].calories
    }
    this.showTotal = total
    return total
  }

}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  hidden: boolean = false;
  todaysFood: any = []

  showList:number;

  constructor() {
     this.foods = foods;
   }

  ngOnInit() {
     this.foods = foods;
  }

  addForm() {
    this.hidden = !this.hidden;
  }

  addFood() {
    console.log("Add contact has been called");
    this.foods.push(this.newFood);
    this.newFood = {};
    this.hidden = !this.hidden;
  }

  addList(food) {
    this.todaysFood.push(food)
    console.log(this.todaysFood)
    this.totalCalories(this.todaysFood);
  }

  totalCalories(todaysFood) {
    let total = 0
    for (let i = 0; i < todaysFood.length; i++) {
       total += todaysFood[i].calories
     }
    this.showList = total
    return total
  }
}

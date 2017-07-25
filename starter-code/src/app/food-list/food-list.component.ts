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
  todaysFoodName: Array<string> = [];

  quantity: number = 1;
  showList: number;

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
    if(this.todaysFoodName.indexOf(food.name) !== -1){
      this.todaysFood[this.todaysFoodName.indexOf(food.name)].quantity++;
    } else {
      food.quantity = this.quantity;
      this.todaysFood.push(food)
      this.todaysFoodName.push(food.name)
      console.log(this.todaysFood)
    }
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

import { Component, OnInit, Input } from '@angular/core';
import foods from '../foods';


interface foods {
  name: string;
  calories: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {

  foodArray: Array<object>;
  pattern: string;
  status: boolean = false;
  todayList: Array<foods> = [];
  todayCalories: number = 0;
  newThing: Object = {};

  constructor() { }

  ngOnInit() {
    this.foodArray = foods;
  }

  addItem ()
  {
    this.foodArray.push(this.newThing);
    this.newThing = {}; 
  }

  toggleForm() {
    this.status = !this.status;
  }

  addFoodToList(food, Quantity) {

    const todayFood = Object.assign({}, food);
    this.todayCalories += food.calories * Quantity;
    Object.defineProperty(todayFood, "quantity", { value: Quantity});

    const finder = this.todayList.find(i => i.name === food.name);

      if (finder) { 
      const tempIndex = this.todayList.indexOf(finder);
      const sum = Number(this.todayList[tempIndex].quantity) + Number(todayFood.quantity);
      this.todayList[tempIndex].quantity = sum;
      }
      else {
      this.todayList.push(todayFood);
      }
  }
}

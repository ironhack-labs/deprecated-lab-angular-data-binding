import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  boolean: boolean;
  newFood: Object = { };
  newList: Array<Object>[];

  buttonClickMethod() {
    if (this.boolean == true) {
      this.boolean = false;
    } else {
      this.boolean = true;
    }
  }

  addFood(){
    this.foods.push(this.newFood);
    this.newFood = { };
    // add contact to contacts list
    // clear inputs
    this.boolean = true;
  }

  addList(){
    console.log(this.foods)
  }

  trackFood(index: number, food: any) {
    console.log(food.name)
  }
  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.boolean = true
  }

  
}

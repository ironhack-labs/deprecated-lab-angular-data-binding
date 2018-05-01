import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];
  showAddNewBtn = false;
  newFood: Object = {
    quantity: 0
  }; 
  todaysFood = []

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  toggleAddNewBtn() {
    this.showAddNewBtn = !this.showAddNewBtn;
  }

  addNewFood() {
    this.foods.push(this.newFood);
    this.newFood = {
      quantity: 0
    };
    this.toggleAddNewBtn();
  }

  addToToday(food) {
    const idx = this.todaysFood.indexOf(food);

    if (idx === -1){
      this.todaysFood.push(food);
    }
    this.todaysFood[this.todaysFood.indexOf(food)].quantity ++;
  }
}

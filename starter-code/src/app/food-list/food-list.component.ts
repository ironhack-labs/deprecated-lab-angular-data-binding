import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;

  show = false;
  buttonName = 'Show Form';

  newItem = {};

  newToday = {};
  totalCal = 0;
  foodSelected = [];

  productTotalCal = 0;

  constructor() { }

  toggle() {
    this.show = !this.show;
    if (this.show) {
    this.buttonName = 'Hide Form';
    } else {
      this.buttonName = 'Show Form';
    }
  }

  add() {
    this.foods.push(this.newItem);
    this.newItem = {};
    this.toggle();
  }

  today(food, quantity){
    food.quantity += parseInt(quantity);


    food.productTotalCal = parseInt(food.calories) * parseInt(food.quantity)
    this.totalCal += food.productTotalCal;

    console.log();
    if (this.foodSelected.indexOf(food) === -1){

      this.foodSelected.push(food);
    }
  }

  ngOnInit() {
  }
}

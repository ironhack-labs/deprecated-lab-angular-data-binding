import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {quantity:0};
  show: Boolean = false;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(newFood){
    // add contact to contacts list
    // clear inputs
    this.foods.unshift(newFood);
  }

  toggleShow() {
    this.show = !this.show;
  }
}

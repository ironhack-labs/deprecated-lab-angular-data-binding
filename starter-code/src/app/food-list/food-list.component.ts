import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  // foods: Array<Object> = foods
  foods: Object[] = foods
  constructor() { }

  newFood: Object = {
  };

  addItem() {
    this.foods.push(this.newFood);
    this.newFood = {};
  }

  ngOnInit() {
  }

}

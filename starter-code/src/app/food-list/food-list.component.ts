import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  //declare foods within export class before the rendering HTML can utilize it
  foods = foods;
  newFood: Object = {};
  constructor() {
  // console.log(foods);
  }
  ngOnInit() {}
  addFood(items) {
    console.log(this.foods);
    console.log(items);
    this.foods.unshift(items);

  }
}

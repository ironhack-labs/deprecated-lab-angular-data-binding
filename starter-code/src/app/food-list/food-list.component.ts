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
  pattern: string;

  constructor() { }

  addFood(form) {  
      this.foods.push(this.newFood);
      this.newFood = "";
  }

  ngOnInit() {
    this.foods = foods;
  }

}

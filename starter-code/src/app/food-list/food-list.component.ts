import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  showFood = false;
  foods: Object [];
  newFood: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addNewFood() {
    foods.push(); {
      this.foods.push(this.newFood);
    }
  }


}

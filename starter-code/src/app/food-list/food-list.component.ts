import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<any>;
  newFood: Object = {};
  formHidden: boolean = false;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  formVisible() {
    this.formHidden = true;
  }

  formHide() {
    this.formHidden = false;
  }

  addFood() {
    this.foodList.unshift(this.newFood);
    this.newFood = {}
  }

}

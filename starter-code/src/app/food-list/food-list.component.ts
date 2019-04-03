import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import {FoodItem} from "./food-item/food-item";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList: Array<FoodItem>;
  imagesPath = '/assets/images/';

  constructor() { }

  ngOnInit() {
    this.foodList = [
      { name: 'Pizza', image: 'pizza.jpeg', calories: 827 },
      { name: 'Vegetables', image: 'vegetable.jpeg', calories: 248 },
      { name: 'Rice with chicken', image: 'rice.jpeg', calories: 472 }
    ]
  }

}

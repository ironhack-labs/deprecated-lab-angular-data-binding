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
  search: string;
  isVisibleForm = false;
  newFood: FoodItem;

  constructor() { }

  ngOnInit() {

    this.newFood = { name: undefined, image: undefined, calories: undefined }

    this.foodList = [
      { name: 'Pizza', image: 'pizza.jpeg', calories: 827 },
      { name: 'Vegetables', image: 'vegetable.jpeg', calories: 248 },
      { name: 'Rice with chicken', image: 'rice.jpeg', calories: 472 }
    ]
  }

  openNewFoodForm() {
    this.isVisibleForm = true;
  }

  addFood() {
    if (this.newFood.name && this.newFood.calories && this.newFood.image &&
       !!this.newFood.name.length && !!this.newFood.image.length && this.newFood.calories > 0) {
      this.foodList.push(this.newFood);
      this.isVisibleForm = false;
    } else {
      alert('All fields are mandatory')
    }
  }

}

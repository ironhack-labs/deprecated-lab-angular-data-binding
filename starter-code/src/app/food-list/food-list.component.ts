import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: Object[];
  searchFood = '';
  newFood: Object = {
    name: null,
    calories: null,
    image: null,
    quantity: null
  };
  visibleForm: boolean = false;
  constructor() { }

  ngOnInit() {
   this.foodsList = foods;
  }

  addFood(food) {
    if (this.visibleForm) {
      console.log("hola")
      this.foodsList.push(food);
      this.newFood = {
        name: null,
        calories: null,
        image: null,
        quantity: null
      };
      this.visibleForm = false;
    } else {
      this.visibleForm = true;
    }
  }

}



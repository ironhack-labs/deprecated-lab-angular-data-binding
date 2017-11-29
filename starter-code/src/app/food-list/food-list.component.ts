import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object= {};


  constructor() {
  }

  ngOnInit() {
    this.foods = foods;
  }

  addNewProduct() {
    this.foods.push(this.newFood);
    console.log(this.newFood);
    this.newFood = {};
    console.log(this.newFood);
  }

}


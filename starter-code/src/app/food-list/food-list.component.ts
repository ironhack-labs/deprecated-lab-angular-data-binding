import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Array<Object> = foods
  newFood: Object = {};

  constructor() { }


  addItem() {
    foods.push(this.newFood);
    console.log("Nuev plato")
    this.newFood = {};
  }

  ngOnInit() {
  }

}

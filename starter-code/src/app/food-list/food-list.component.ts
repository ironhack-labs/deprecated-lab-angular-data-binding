import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<Object>;
  newFood: Object = {};
  adder: boolean = false;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  onKey(value) {
      console.log(`Input value: ${value}`);
  }

  displayForm () {
    this.adder = !this.adder;
  }

  addNewFood () {
    console.log("new contact added")
    this.foods.push(this.newFood);
    this.newFood = "";
  }

}

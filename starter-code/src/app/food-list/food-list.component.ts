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
  show = false;

  constructor() {}

  addItem(newFood){
    console.log("Add contact has been called");
    this.foods.push(newFood);
    this.newFood = {};
    this.show = false;
  }

  formShow(){
    this.show = true;
  }

  ngOnInit() {
    this.foods = foods;
  }

}

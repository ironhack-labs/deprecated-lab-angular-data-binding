import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: Array<Object>;
  formEnable: Boolean = false;
  newFood: Object = {};
  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

  addFood(newFood) {
    console.log(newFood);
    this.foodsList.unshift(newFood);
    this.formEnable=false;
  }
  addForm(){
    this.formEnable=!this.formEnable;
  }
}

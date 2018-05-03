import { Component, OnInit } from '@angular/core';
import {Food, foods} from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  userInput: string;
  foods: Array<Food> = foods;
  newFood: any = {};

  classState: any = {
    form: true
  };

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood() {
    console.log("food has been added");
    foods.push(this.newFood);
    this.newFood = "";
  }

  toogleForm() {
    this.classState.form = !this.classState.form;
  }

}

import {Component, OnInit} from '@angular/core';
import {Food, foods} from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foods: Array<Food> = foods;
  userInput: string;
  classState: any = {
    displayForm: true,
  };
  newFood: any = {};

  constructor() {}

  ngOnInit() {
    this.foods = foods;
  }

  toggleClass() {
    this.classState.displayForm = !this.classState.displayForm;
  }
  addFood() {
    foods.push(this.newFood);
    this.newFood = '';
  }
}

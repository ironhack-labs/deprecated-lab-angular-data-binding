import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];
  newFood: Object = {
    quantity: 0
  }
  isInputDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showForm () {
    this.isInputDisabled = !this.isInputDisabled;
  }

  addFood() {
    this.foods.push(this.newFood)
    this.newFood = ""
    this.showForm();

  }

}

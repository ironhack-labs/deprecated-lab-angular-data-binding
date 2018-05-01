import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  newFood: Object = {};
  specialFood: Array<string>;
  showForm: boolean;
  calCount: number;
  qty: number;

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
    this.showForm = false;
    this.specialFood = [];
    this.calCount = 0;
    this.qty = 0;
  }
  addFood() {
    this.foodList.unshift(this.newFood);
    this.newFood = {};
    if (this.showForm) {
      this.showForm = false;
    }
  }
  showFormAddFood() {
    this.showForm = true;
  }
  addToSpecialties(food) {

    this.specialFood.push(food);
    this.calCount+=food.calories;
    this.qty+=food.quantity;

    console.log(this.specialFood);
    console.log(this.calCount);

  }

}

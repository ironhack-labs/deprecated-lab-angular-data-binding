import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  showForm: Boolean = false;
  newDish: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addForm() {
    this.showForm = !this.showForm;
  }

  addDish(){
    console.log("Add Dish has been called");
    // add contact to contacts list
    this.foods.push(this.newDish);
    // clear inputs
    this.newDish = {};
  };
};

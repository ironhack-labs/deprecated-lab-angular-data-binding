import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],

})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  newFood: Object = {};
  edited: false
  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  addFoodList(){
      this.foodList.push(this.newFood);
      this.newFood={};
      // add contact to contacts list
      // clear inputs
    }
}
//   editList() {
//    this.edited = !this.edited;
//     }
//
//

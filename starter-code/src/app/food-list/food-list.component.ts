import { Component, OnInit } from '@angular/core';
// THIS IS ABSTRACTED FROM US IN CLASS
// Make sure to import this file when doing your final project 
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  // Define foods as an object //
  foods  : Object[];
  // Define newFood as an empty object //
  newFood: Object = {}

  constructor() { }

  ngOnInit() {
    // import the foods from the foodList //
    this.foods = foodList;
  }
  

}

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
  // Define newFood as an empty object. Will push into the Array //
  newFood: Object = {}
  buttonClick: boolean = false;

  constructor() { }
  ngOnInit() {
    // import the foods from the foodList //
    this.foods = foodList;
  }
  
  // Show "Add New" Form when button is clicked
  buttonClicked(){
    this.buttonClick = !this.buttonClick;
    // Console log to see if buttonClick changes value
    console.log(this.buttonClick);
  }

  addNew(){
    // Push new food into Array
    this.foods.push(this.newFood);
    // Clear the newFood Object
    this.newFood = {};
    // Hide the Form once this button is added
    this.buttonClick = ! this.buttonClick;
  }

}

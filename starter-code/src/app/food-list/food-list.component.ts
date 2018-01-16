import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  // Foods are listed as an Array Object (?)
  foods           : Object[];

  // Why do we have this syntax?
  myList          : {name: string, calories: number, quantity: number, image: string}[] = [];       
  pattern         : string;
  isEditing       : boolean = false;
  newFoodName     : string = "Example Name";
  newFoodCalories : number = 250;
  newFoodImage    : string = "http://dhiglobal.com/wp-content/uploads/2016/07/placeholder.jpg";
  quantity        : number;
  totalCalories   : number = 0;


  // Why is this line of code here?
  constructor() {}

  ngOnInit() {
    this.foods = foodsList;
  }


  // This function is triggered whenever a User clicks on the "Add New Food"
  // link and is what displays the form based on whether the User clicks "in"
  // or "out".

  addFood(){
    // If I'm correct, this is to say that we want "this.isEditing" to be equal 
    // to the OPPOSITE of whatever it is.

    // If "this.isEditing" is initially FALSE, then it will be set to TRUE.

    // If "this.isEditing" is initially TRUE, then it will be set to FALSE.
    this.isEditing = !this.isEditing
  }

  // This function handles the actual STORING of the new food.
  
  newFood() {
    const newFood = {
      name: this.newFoodName,
      calories: this.newFoodCalories,
      image: this.newFoodImage,
      quantity: 0
    }

    // What is this line of code doing?
    this.foods.unshift(newFood)

    this.isEditing = false;
    this.newFoodName = "";
    this.newFoodCalories = null;
    this.newFoodImage = "";
  }
}

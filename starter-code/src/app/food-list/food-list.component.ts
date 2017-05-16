import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  pattern: string;
  form1: number;
  newFood: Object = {};
  constructor() { }

  ngOnInit() {
    this.foods = foodsList;
  }
  changeValue(){
    this.form1 = 1;
  }
  addFood(item : any){

      console.log("Add food has been called");
      // add contact to contacts list
      this.foods.push({item});


  // clear inputs
  }

}


// Create a button to add new foods.
//
// When a user clicks the button, a form will appear with fields for a name, calories, and image.
//
// When the user clicks submit, the food will be added to the new food list.
//
// When the user clicks the submit button, or when they click add food again the form should disappear.

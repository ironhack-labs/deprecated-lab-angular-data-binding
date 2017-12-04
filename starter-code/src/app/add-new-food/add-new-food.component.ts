import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'addNewFood',
  templateUrl: './add-new-food.component.html',
  styleUrls: ['./add-new-food.component.css']
})
export class AddNewFoodComponent implements OnInit {
	 

																								 textConfig: any = {
																								   didClick: false
																								 };


	foodsArray: Object[];
	newFood: Object = {};



  constructor() { }

  ngOnInit() {
  	this.foodsArray = foods;
  }

  addFood() {
    console.log("Add Food has been called");
    // add food to foods list
    this.foodsArray.push(this.newFood);
    this.newFood = {};
    // clear inputs
  }

																			  toggleForm() {
																			      if (this.textConfig.didClick) {
																			          this.textConfig.didClick = true;
																			      }
																			      else {
																			          this.textConfig.didClick = false;
																			      }

}

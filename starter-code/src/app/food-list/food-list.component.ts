import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  boolean: boolean;
  newFood: Object = {};
  newList: Array<Object> = []; // or Object[];

 addFood() {
 	if (this.boolean === true) {
 		this.boolean = false;
 	} else {
 		this.boolean = true;
 	}
 }

  constructor() { }

  ngOnInit() {
  	this.foods = foods;
  	this.boolean = true;
  }

    anotherFood(){
    console.log("Another food has been called");
    
    this.foods.push(this.newFood);

     this.newFood = {};
  }

  addToList(food){
  	console.log("adding to list");
  	this.newList.push(food);
  	console.log(this.newList[0]);
  }

}

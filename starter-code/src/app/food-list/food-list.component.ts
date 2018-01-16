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

}

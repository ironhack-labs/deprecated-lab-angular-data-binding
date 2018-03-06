import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsArray: Object[];
  newFood: Object = {};

  constructor() { }

  ngOnInit() {
    this.foodsArray = foods;
  }

  addFood(){
    console.log("Add food has been called");
      this.foodsArray.push(this.newFood)
    
  }
}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodArray : Array<Object>;
  newFood : Object = {};
  hidden : Boolean = false;

  constructor() { }

  toggleForm() {
    this.hidden = !this.hidden;
  }
  addFood() {
    this.foodArray.push(this.newFood);
    this.newFood = {};
    this.toggleForm();
  }


  ngOnInit() {
    this.foodArray = foods;
  }

}

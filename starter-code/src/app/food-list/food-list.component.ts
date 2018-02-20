import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foodArray: Array<{}>;
  today = new Date();
  pattern: string;
  newFood:Object = {};
  isFormHidden: string = "";

  constructor() {
   }

  ngOnInit() {
    this.foodArray = foods;
  }

  addItem() {
    this.foodArray.push(this.newFood);
    this.newFood = {};
  }

  toggleInput() {
    if (this.isFormHidden === "") { 
      this.isFormHidden = "hide";
    } else {
    this.isFormHidden = "" ;
    }
  }
}


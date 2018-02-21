import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foodArray: Array<{}>;
  myList: Array <{}> = [];
  newFood:Object = {};
  isFormHidden: boolean = true;

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
    this.isFormHidden = !this.isFormHidden;
  }
  pushToList(i){
    this.myList.push(this.foodArray[i]);
  }
  getCalories(){
    return this.myList.reduce(
      (acc,item)=> acc+item["calories"],0);
  }
}


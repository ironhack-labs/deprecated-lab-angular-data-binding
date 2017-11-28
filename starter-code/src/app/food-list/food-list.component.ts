import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
    foodlist: Object[];
    newFood: Object = {};
    pushed: boolean = false;

  constructor() { }

  ngOnInit() {
    this.foodlist = foods;
  }

  addFood(){
    this.foodlist.push(this.newFood)
    this.newFood = {};
  }

  changedButton(){
    this.pushed =! this.pushed;
  }
}

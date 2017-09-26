import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  newFood: Object = {};
  constructor() { }

  ngOnInit() {
  }

  isInputDisabled: boolean = false;
  appearsForm(){
    this.isInputDisabled = !this.isInputDisabled;
    console.log(this.isInputDisabled)
  }
  addFood(){
    this.foods.push(this.newFood)
    this.isInputDisabled = !this.isInputDisabled;
  }


}

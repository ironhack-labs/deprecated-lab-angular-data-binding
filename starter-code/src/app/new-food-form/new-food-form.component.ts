import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-new-food-form',
  templateUrl: './new-food-form.component.html',
  styleUrls: ['./new-food-form.component.css']
})
export class NewFoodFormComponent implements OnInit {
  foods: Object[];
  newFood: Object = {}

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(){
    this.foods.push(this.newFood)
    this.newFood = {}
  }

}

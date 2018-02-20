import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-add-food-form',
  templateUrl: './add-food-form.component.html',
  styleUrls: ['./add-food-form.component.css']
})
export class AddFoodFormComponent implements OnInit {
  newFood: Object = {};

  constructor() { }

  ngOnInit() {
  }

  addFood(form){
    foods.push(this.newFood);
    this.newFood = {};
  }

}

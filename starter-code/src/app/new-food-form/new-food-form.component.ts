import { Component, OnInit, Input } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-new-food-form',
  templateUrl: './new-food-form.component.html',
  styleUrls: ['./new-food-form.component.css']
})
export class NewFoodFormComponent implements OnInit {

  foods: Object[]

  newFood: Object = {
    name: '',
    calories: '',
    image: ''
  };

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(){
    console.log("Add food has been called");
    this.foods.push(this.newFood)
  }

}

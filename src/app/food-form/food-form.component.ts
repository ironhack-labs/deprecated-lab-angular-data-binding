import { Component, OnInit } from '@angular/core';
import foodList from '../food-list';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css'],
  // template: `
  //
  //
  //  `
})
export class FoodFormComponent implements OnInit {
  isInputDisabled: boolean = true;

  foods: Object[];
  newFood: Object = {};
  pattern: string;

  constructor() { }

  ngOnInit() {
    this.foods= foodList;
  }

    toggleInput() {
        this.isInputDisabled = !this.isInputDisabled;
    }

  addFood(name, calories, image){
    console.log("Add food has been called");
    this.foods.push({name: name, image : image, calories:calories });
  }

}

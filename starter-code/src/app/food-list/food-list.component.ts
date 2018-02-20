import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  feedbackEnabled = null;
  processing = false;
  showForm = false;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
  showHideForm() {
    if(this.showForm == true) {
      this.showForm = false;
      console.log(this.showForm)
    } else {
      this.showForm = true;
      console.log(this.showForm)
    }
  }

  addFood(form) {
    if(form.valid) {
      this.foods.push(this.newFood);
      this.feedbackEnabled = false;
      this.newFood = {};
      this.showForm = false;
    } else {
      this.feedbackEnabled = true;
    }

  }

}

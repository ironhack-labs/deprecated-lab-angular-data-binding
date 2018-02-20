import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object [];
  newFood: Object = {};
  todaysFood: Object[];
  feedbackEnabled = false;
  display: boolean = false;
  pattern: string;


  constructor() {
    this.foods;
  }

  ngOnInit() {
    this.foods = foods;
  }

  submitForm(form) {
    this.feedbackEnabled = true;
    if (form.valid) {
       this.foods.push(this.newFood);
       this.newFood = '';
       this.feedbackEnabled = false;
    }
  }
  displayForm(){
    this.display = true;
  }
  hideForm(){
    this.display = false;
  }
}

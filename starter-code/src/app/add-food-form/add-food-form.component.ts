import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-add-food-form',
  templateUrl: './add-food-form.component.html',
  styleUrls: ['./add-food-form.component.css']
})
export class AddFoodFormComponent implements OnInit {
  newFood: Object = {};
  feedbackEnabled= false;
  formAddFood = false;

  constructor() { }

  ngOnInit() {
  }

  showForm() {
    this.formAddFood = true;
  }

  addFood(form){
    if (form.valid) {
      foods.push(this.newFood);
      this.newFood = {};
      this.feedbackEnabled = false;
      this.formAddFood = false;
    } else {
      this.feedbackEnabled = true;
    }

  }

}

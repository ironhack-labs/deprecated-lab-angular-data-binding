import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newDish: Object = {};
  feedbackEnabled= false;
  processing = false;


  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  addDish(form){
    if(form.valid){
      this.foods.push(this.newDish);
      this.feedbackEnabled = false;
      this.newDish = '';
    } else {
      this.feedbackEnabled = true;
    }
    
    // add contact to contacts list
    // clear inputs
  }

}


import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  hideDisplay = false;
  newFood: any = {};

  constructor() { }

  toggleDisplayAdd() {
    this.hideDisplay = !this.hideDisplay;
  }

  addFood() {
    foods.push({
      name: this.newFood.name,
      calories: this.newFood.calories,
      image: this.newFood.image
    });
  }
  ngOnInit() {
  }

}

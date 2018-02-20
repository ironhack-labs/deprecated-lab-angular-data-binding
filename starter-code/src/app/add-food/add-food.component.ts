import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  foods: Object[];
  newfood: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addItem(form) {
      foods.push(this.newfood);
      this.newfood = '';
  }
}

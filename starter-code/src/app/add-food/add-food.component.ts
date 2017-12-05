import { Component, OnInit } from '@angular/core';

import {foods} from '../foods';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  myFoods: any[];
  newFood: Object = {};

  constructor() { }

  ngOnInit() {
    this.myFoods = foods;
  }

  addFood() {
    this.myFoods.push(this.newFood)
    }
  }

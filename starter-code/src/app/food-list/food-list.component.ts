import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import {FilterPipe} from '../pipes/filter.pipe'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  newFoods: Object = {};
  constructor() { 
  }

  ngOnInit() {
  }
  addFoods(){
    this.foods.push(this.newFoods)
    this.newFoods={};
  }
}


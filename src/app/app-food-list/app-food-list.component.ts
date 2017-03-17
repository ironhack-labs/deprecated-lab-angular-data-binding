import { Component, OnInit } from '@angular/core';
import foods from '../food';
import {SearchPipe} from '../search.pipe'

@Component({
  selector:    'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: [ './app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {
  foods: Array<Object>;
    constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
}

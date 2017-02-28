import { Component, OnInit } from '@angular/core';
import foodList from '../food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[];
  newFood: Object = {};
  pattern: string;

  constructor() { }

  ngOnInit() {
    this.foods= foodList;
  }
}

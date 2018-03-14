import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['../app.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

}

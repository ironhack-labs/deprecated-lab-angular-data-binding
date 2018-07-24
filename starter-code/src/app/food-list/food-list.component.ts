import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  
  foods: Array<Object>
  //  = [
  // {
  //   name: String,
  //   calories: Number,
  //   image: String,
  //   quantity: Number
  // }
  // ];

  constructor() { }
  ngOnInit() {
    this.foods = foods;
  }
}

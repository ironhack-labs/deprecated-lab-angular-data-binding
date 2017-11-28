import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[]
  newFood: Object = {name:'', image:'', calories:null, quantity:null}
  totalCalories:number = 0
  elementQuantity:number = 0

  constructor() {
    this.foods = foods;
  }

  ngOnInit() {
  }
}

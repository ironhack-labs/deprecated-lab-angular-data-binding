import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  showForm=true;

  constructor() {}
  
  ngOnInit() {
    this.foods = foods;
  }


  addFood(form){
    foods.push(this.newFood);
    this.newFood = {};
    this.showForm=false
  }
}

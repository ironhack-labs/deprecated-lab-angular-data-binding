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
  isHidden: boolean = false;
  constructor() {
    this.foods = foods;
    }

  ngOnInit() {
    this.foods = foods;
  }

  addForm(){
    this.isHidden = !this.isHidden;
  }

  addFood() {
    this.foods.push(this.newFood);
    this.newFood = {};
    this.isHidden = !this.isHidden;
  }
}

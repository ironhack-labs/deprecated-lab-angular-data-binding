import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  
  foods = [];
  newFoods:object =[];

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }
AddNewFood(p){
  this.foods.push(p);

  this.newFoods={
    name: "",
    calories: "",
    quantity: "",
    image: ""
  };
}
}

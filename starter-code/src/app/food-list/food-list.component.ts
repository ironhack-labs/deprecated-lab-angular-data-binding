import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  
})
export class FoodListComponent implements OnInit {
  foods: Array<Object>= [];
  newFood: Object = {};
  constructor() { this.foods = foods;}

  ngOnInit() {
    this.foods = foods;
  }
  
  addFood(){
    console.log(this.foods);
    this.foods.push(this.newFood);
    this.newFood = [];
  }
  foodList(item){
    this.foods.splice(this.foods.indexOf(item),0,item);
  }
}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  food: Object[]
  newfood: Object = {};
  foodToDay = []
  quantity:number

  constructor() { }

  ngOnInit() {
    this.food = foods;
  }
isInputDisabled: boolean = true;
  addFood(){
    this.food.unshift(this.newfood);
    this.newfood = {};
    this.isInputDisabled = !this.isInputDisabled;
  }
  caloriestotales: number = 0
  addFoodToDay(food){
    if(this.foodToDay.indexOf(food)>= 0) {
      this.quantity =+ 1
      this.caloriestotales += food.calories * this.quantity

}else{
  this.caloriestotales += food.calories * this.quantity
  this.foodToDay.unshift(food);
}

  }
}

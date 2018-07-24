import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  
  foods: Array<Object> = foods;
  inputDisabled: boolean = false;

  newFood: Object = {};

  constructor() { 
    //this.foods = foods;
  }
  
  ngOnInit() {
  }

  addNewFood(add){
    if (this.inputDisabled){
      this.foods.push(add);
      console.log(add);
      console.log(foods);
      
      this.newFood = {};
    } 
    
    this.inputDisabled = !this.inputDisabled;
  }
}

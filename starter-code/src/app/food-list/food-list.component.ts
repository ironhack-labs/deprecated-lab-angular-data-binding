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
  listFood: Object[];
  totalCalories: number;
  totalQuantity: number;
  constructor() { 
    this.listFood = [];
    this.totalCalories = 0;
    this.totalQuantity = 0;
  }
  

  ngOnInit() {
    this.foods = foods;
  }

  addItem($event, name, calories, image) {
    this.foods.unshift({name, calories, image, quantity: 1});
  }

  addList($event, item, quantity) {
    item.quantity = parseInt(quantity);
    
    if( this.listFood.indexOf(item) == -1 ) {
    if( this.totalCalories == 0 ) {
       this.totalCalories = item.calories * quantity;
      } else {
        this.totalCalories += item.calories * quantity;
      }
        this.listFood.push(item);
      } else {
        this.totalCalories += item.calories * quantity;
      }
  }

  public show:boolean = false;
  public buttonName = 'Add new Food';
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Add new Food";
  }

}

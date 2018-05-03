import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { Food } from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList: Food[] = foods;
  newFood = new Food();
  userInput: string;
  classState: any = {
    isHidden: true
  }
  todaysFood: Food[] = [];
  foodIndex: number;
  caloriesCount: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

  toggleAddingPanel() {
    this.classState.isHidden = !this.classState.isHidden;
  }

  addFood() {
    console.log( "check" );
    this.foodList.push( this.newFood );
    this.newFood = new Food;
  }

  addToTodays( x ) {
      this.todaysFood.push( x );
      this.caloriesCount += x.calories;
  }

}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  todaysFood : object[] = [];

  foods : Array<Object> = foods;

  newFood : Object = {}

  visible:boolean  = false;

  totalCal : number = 0;
  addFood(){
    this.visible = !this.visible;
    this.foods.push(this.newFood)
    this.newFood={};
  }
  show(){
    this.visible = !this.visible;
  }

  todayFood(food){
    this.todaysFood.push(food)
    this.totalCal += food.calories
  }
  constructor() { }

  ngOnInit() {
  }

}

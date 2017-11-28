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
  active: boolean = false;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

change(){
  this.active =! this.active;
}
  addFood(){
      console.log("Add food has been called");
      this.foods.push(this.newFood)
      this.newFood = {}
    }

}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  listFood:Array<object>;
  search:string;
  activeForm:Boolean;
  newFood:object;
  showFood:Array<object>;
  sumCal:number;
  constructor() { 
    this.listFood = foods;
    this.search = "";
    this.activeForm = false;
    this.newFood = {};
    this.showFood = [];
    this.sumCal = 0;
  }
  showForm(){
    this.activeForm = !this.activeForm;
  }
  addFood(){
    this.listFood.push(this.newFood)
    this.newFood = {}
    this.showForm()
  }
  addList(food){
    this.showFood.push({name:food.name,cal:food.calories})
    this.sumCal += food.calories;
  }
}

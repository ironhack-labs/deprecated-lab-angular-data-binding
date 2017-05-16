import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList:Object[];
  todayFoodList:Object[]=[];
  newFood: Object = {};
  newTodayFood: Object = {};
  status:boolean=false;
  countCalory:number=0;
  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

  toggleStatus():void{
    this.status=!this.status;
  }

  addFood():void{
    this.newFood["quantity"] = 0;
    this.foodsList.push(this.newFood);
  }

  addTodayFood(todayFood,quantity):void{
    this.newTodayFood = todayFood;
    this.newFood["quantity"] = 0;
    this.countCalory += this.newTodayFood["calories"]*quantity;
    let isIn:boolean=false;
    this.todayFoodList.forEach((foodInspected)=>{
        if(foodInspected["name"]===this.newTodayFood["name"]){
          isIn=true;
          foodInspected["quantity"] += parseInt(quantity);
        }
    });
    if(!isIn)
    {
      this.newTodayFood["quantity"]+= parseInt(quantity);
      this.todayFoodList.push(this.newTodayFood);
    }
  }
}

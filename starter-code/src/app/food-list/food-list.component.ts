import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit { 
    //food:Object;
    newFood:Object;
    foodList:Object[];
    foodsForToday: Object[];
    caloriesToday: number;
    displayForm:boolean;
    
   

  constructor() { 
   // this.food={};
    this.newFood={};
    this.foodList= foods;
    this.caloriesToday=0;
    this.foodsForToday=[];
    this.displayForm=false;
  }
      
  ngOnInit() {
  }

  showForm() {
    this.displayForm= !(this.displayForm);
  }

  addNew () {
    this.foodList.push(this.newFood);
    this.newFood={};
  }

  addToToday(food):void {
    this.foodsForToday.push({
        name:food.name,
        image:food.image,
        quantity:food.quantity
      }
    );
    let totalCals= food.calories * food.quantity;
    this.caloriesToday+= totalCals;
  

    

  }




}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';



@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

list: Array<Object>;
menu: Array<Object>;
newMeal: Object = {};
totalCalories: number = 0;

isInputDisabled: boolean = false;



  constructor() {
    this.menu = []
    this.list = foods;
  }

  ngOnInit() {}

  addMeal(image:string,name:string,calories:string){
    this.list.push({image,name,calories})
  }

  toggleInput() {
     this.isInputDisabled = !this.isInputDisabled;
  }

  addTodaysMeal(image:string,name:string,calories:number){
    this.menu.push({image,name,calories})
    this.totalCalories += calories;
  }



}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods:Object[] = foods;
  pattern: string;
  wannaAddFood:boolean=false;
  todaysFood:Object[] = [];
  totalCalories:number = 0;
  currentFood:string[] = []

  constructor() { }

  ngOnInit() { }

  toggleForm():void { this.wannaAddFood = !this.wannaAddFood }

  addItem(name:string, img:string, calories:number, isAdd:boolean, quantity:number):void {
    var newFood = {
      name: name,
      image: img,
      calories: calories,
      quantity: quantity || 1
    }

    if(isAdd){
      this.foods.push(newFood);
      this.toggleForm();
    }else {
      this.totalCalories = this.totalCalories + newFood.calories * newFood.quantity;
      if (!this.isAlreadyInTodayFood(newFood.name)){
        this.currentFood.push(newFood.name);
        this.todaysFood.push(newFood);
      } else {

      }
    }
  }

  isAlreadyInTodayFood(name) {
    return this.currentFood.indexOf(name) !== -1;
  }
}

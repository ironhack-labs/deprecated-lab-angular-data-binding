import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {

  foods:Object[];
  show:boolean = false;
  newFood:Object = {};

  totalFoods:Array<any> = [];
  totalCalories:number = 0;

  constructor() {}

  ngOnInit() {
    this.foods = foods;
  }

  openForm():void {
    this.show = !this.show;
  }

  addFood(one, two, three):void {
    this.foods.push({
      name: one,
      calories: two,
      image: three
    });
    this.newFood = {};
    this.show = !this.show;
  }

  foodPick(name, calories):void {
    this.totalFoods.push(name);
    this.totalCalories += calories;
    console.log(name);
    console.log(this.totalCalories);
    console.log(this.totalFoods);
  }

}

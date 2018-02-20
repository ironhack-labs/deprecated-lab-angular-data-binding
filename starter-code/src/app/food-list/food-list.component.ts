import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  total:number=0;
  show:boolean = false;
  foods:Object[];
  newFood:Object = {};
  newList:object[]=[];

  constructor() { }

  ngOnInit() {
     this.foods = foodsList;
  }

  addFood(event){
    this.foods.push(this.newFood);
    this.newFood = '';
  }

  addList(food){
    this.newList.push(food);
    this.total += food.calories;
  }

  toogleForm(){
    this.show = !this.show;
  }
}

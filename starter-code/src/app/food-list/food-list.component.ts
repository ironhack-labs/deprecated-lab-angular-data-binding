import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {

  foods:Object[];
  newFood:Object = {};
  show:boolean = false;

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

}

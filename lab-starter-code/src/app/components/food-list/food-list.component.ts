import { Component, OnInit } from '@angular/core';
import  { foods } from '../../foods'
import { FoodModel } from '../../models/food.model'
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  listFood:Array<FoodModel>
  filterWord:string
  constructor() { }

  ngOnInit() {
    this.listFood = foods;
    this.filterWord = '';
  }

  

}

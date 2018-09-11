import { Component, OnInit } from '@angular/core';
import foodList from '../foods';
import {Food} from '../shared/food.model'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods : Array<Food> = foodList;
  foodToCreate : Food = new Food();

  constructor() { }

  ngOnInit() {
  }

  onClickCreateFood(): void {
    this.foods.push(this.foodToCreate)
    this.foodToCreate = new Food()
    this.onClickShowForm = false;
  }

  onClickShowForm = false;

}

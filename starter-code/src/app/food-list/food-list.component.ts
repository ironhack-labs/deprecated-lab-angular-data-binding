import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList:Object[] = foods;
  formVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  formShow() {
    this.formVisible = true;
  }

  addFood(foodItem) {
    this.foodList.push(foodItem);
  }


}

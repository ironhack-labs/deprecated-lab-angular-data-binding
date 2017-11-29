import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodSearch = new Search();
  foods: Object[];
  foodName = null;
  isProcessing = null;

  constructor() {
    this.foods = foods;
  }

  handleAddClick() {
    console.log(this.foodName);
  }

  ngOnInit() {}
}

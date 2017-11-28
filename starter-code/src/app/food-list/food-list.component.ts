import { Component, OnInit } from '@angular/core';
import allFoods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
foods: Array<object> = allFoods
  constructor() {
    // this.foods = allFoods
  }

  ngOnInit() {
  }
}

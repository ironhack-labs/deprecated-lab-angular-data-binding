import { Component, OnInit } from '@angular/core';
import foods from '../foods';

interface foods {
  name: string;
  calories: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodArr: Object[];
  pattern: string;

  constructor() { }

  ngOnInit() {
    this.foodArr = foods;
  }

}

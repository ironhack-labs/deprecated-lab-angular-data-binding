import { Component, OnInit } from '@angular/core';
import foods from '../../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  isHide: boolean;

  foodList: Object[];

  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  foodForm(): void {
    this.isHide = !this.isHide;
  }

}

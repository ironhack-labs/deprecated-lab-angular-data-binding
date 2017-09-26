import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  food: Object[]
  newfood: Object = {};
  constructor() { }

  ngOnInit() {
    this.food = foods;
  }
isInputDisabled: boolean = true;
  addFood(){
    this.food.unshift(this.newfood);
    this.newfood = {};
    this.isInputDisabled = !this.isInputDisabled;
  }
}

import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  food: Array<Object> = foods;
  newItem = {};
  show = false;
  buttonName = 'Show Form';
  constructor() {}

  ngOnInit() {}

  add() {
    this.food.push(this.newItem);
    this.toggle();
  }
  toggle() {
    this.show = !this.show;
    if (this.show){
    this.buttonName = 'Hide Form';
    } else {
     this.buttonName = 'Show Form';
  }
}
}

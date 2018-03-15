import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-new',
  templateUrl: './food-new.component.html',
  styleUrls: ['./food-new.component.css']
})
export class FoodNewComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};

  @Output() close = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFoodList() {
    this.foods.unshift(this.newFood);
    this.newFood = {};
    this.close.emit('close');
  }

}

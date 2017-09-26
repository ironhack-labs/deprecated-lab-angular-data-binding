import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foodlist: Array<Object> = foods;
  newFood: Object = { };
  toggleForm: boolean = false;

  constructor() { }

  addItem(newFood) {
    this.foodlist.unshift(newFood);
    this.newFood = { }
  }

  showForm() {
    this.toggleForm = !this.toggleForm;
  }

  ngOnInit() {
  }

}

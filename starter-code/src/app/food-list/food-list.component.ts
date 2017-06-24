import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  added: boolean = false;

  constructor() { }

  addtodayfood(food, quantity) {
    food.quantity += parseInt(quantity.value, 10);
  }

  ngOnInit() {
    this.foods = foods;
  }



}

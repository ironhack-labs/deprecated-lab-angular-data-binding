import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods : Object [];
  name: string;
  calories: number;
  image: string;
  quantity: number

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood (name, calories, image, quantity) {}

}


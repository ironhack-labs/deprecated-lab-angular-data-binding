import { Component, OnInit } from '@angular/core';
import foods from './../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  myFoods: Object[] = foods;

  constructor() { }

  ngOnInit() { }

  addItem(name, calories, image) {
    this.myFoods.push({name: name, calories: calories, image: image})
  }
}

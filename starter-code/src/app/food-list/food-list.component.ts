import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: Object[];

  newFood: Object = {};
  active: boolean = false;

  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

  showForm() {
    this.active = !this.active;
  }

  addFoods (newFood){
    console.log(newFood);

    this.foodsList.push(this.newFood);
    this.newFood = {};
    this.active = !this.active
  }
}

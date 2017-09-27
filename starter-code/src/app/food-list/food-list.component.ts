import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  mySearchTerm: string;
  foods: any[];
  newFood: any[]= [];
  favorite: any[] = [];

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood() {
    this.foods.push(this.newFood);
  }

  addFavorite(oneFood) {

    this.favorite.push(oneFood);
  
  }

}

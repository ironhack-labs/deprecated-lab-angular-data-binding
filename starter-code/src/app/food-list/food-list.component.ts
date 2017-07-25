import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Object[] = [];
  searchTerm: string = '';
  showAddFoodForm: boolean = false;
  foodToAdd: Object = { };

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  showAddFood() {
    this.showAddFoodForm = !this.showAddFoodForm;
  }

  submitFood() {
    this.showAddFoodForm = false;
    this.foods.unshift(this.foodToAdd);
    this.foodToAdd = {}
  }

}

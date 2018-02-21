import { Component, OnInit } from '@angular/core';
import food from '../foods';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  list: Object[];
  newList: Object = {

  }
  newFood: Object = {

  }
  enableForm: boolean = false;


  ngOnInit() {
    this.foods = food;
  }
  addFood(comida) {
    if (this.enableForm) {
      this.foods.push(comida)
      this.newFood = { name: "", calories: "", image: "" }
    }
    this.enableForm = !this.enableForm;
  }
  addList() {
    this.list.push(foods)
    this.newList = {}
  }
}
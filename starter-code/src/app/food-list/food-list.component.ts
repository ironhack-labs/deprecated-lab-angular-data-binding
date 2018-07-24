import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { access } from 'fs';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Array<object>;
  todayFoods: Array<object> = [];
  newFood: Object = {};
  showForm: boolean = false;
  fieldsError: boolean = false;
  totalCal: number = 0;

  constructor() { }

  ngOnInit() {
    foods.forEach(e => e["quantity"]++);
    this.foods = foods;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addFood() {
    if (this.newFood["name"] !== "" && this.newFood["calories"] !== "" && this.newFood["image"] !== "") {
      this.foods.push(this.newFood);

      this.newFood = {};
      this.showForm = false;
      this.fieldsError = false;
    } else {
      this.fieldsError = true;
    }
  }

  addToTodayMenu(f, quantity) {
    let pos = this.todayFoods.indexOf(f);
    if (pos !== -1) {
      this.todayFoods[pos]["quantity"] += parseInt(quantity);
    } else {
      this.todayFoods.push(f);
    }
    this.totalCal += f.calories * quantity;
  }

}

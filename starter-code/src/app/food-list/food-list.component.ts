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
  todayList: Array<Object> = []

  constructor() { }

  addItem(comidita) {
    this.foodlist.unshift(comidita);
    this.newFood = { }
  }

  showForm() {
    this.toggleForm = !this.toggleForm;
  }

  addTodayList(food) {
    this.todayList.push(food);
  }

  ngOnInit() { }

}

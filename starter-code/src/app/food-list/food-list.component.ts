import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import todaysfoods from '../todaysfoods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  added: boolean = false;
  todaysfoodsarray: Object[];

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.todaysfoodsarray = todaysfoods;
  }

  addtodayfood(food) {
    this.todaysfoodsarray.push(food);
  }

}

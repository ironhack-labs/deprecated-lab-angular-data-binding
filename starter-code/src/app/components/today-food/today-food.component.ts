import { Component, OnInit } from '@angular/core';
import foods from '../../foods';

@Component({
  selector: 'app-today-food',
  templateUrl: './today-food.component.html',
  styleUrls: ['./today-food.component.css']
})
export class TodayFoodComponent implements OnInit {
  foods: Object[];
  list: Object[];
  addFood: Object = {};

  constructor() {}

  ngOnInit() {
    this.foods = foods;
  }

  addList(){
    this.list.push(this.addFood);
  }

}

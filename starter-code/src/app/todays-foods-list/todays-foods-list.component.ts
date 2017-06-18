import { Component, OnInit } from '@angular/core';
import foods from '../foods'

@Component({
  selector: 'app-todays-foods-list',
  templateUrl: './todays-foods-list.component.html',
  styleUrls: ['./todays-foods-list.component.css']
})

export class TodaysFoodsListComponent implements OnInit {

  newTodaysFood: Object;
  todaysFoods: Object[]

  constructor() { }

  ngOnInit() {
  }

  addTodaysFood(name, calories, quantity:HTMLInputElement) {
    this.newTodaysFood = {
      name: name,
      calories: calories,
      quantity: quantity.value
    }
    this.todaysFoods.push(this.newTodaysFood);
  }

}

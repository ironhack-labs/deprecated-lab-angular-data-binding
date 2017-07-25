import { FoodsService } from './../shared/foods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todays-foods',
  templateUrl: './todays-foods.component.html',
  styleUrls: ['./todays-foods.component.css'],
  providers: []
})
export class TodaysFoodsComponent implements OnInit {

  constructor(private foodsService:FoodsService) { }

  ngOnInit() {}

  get foods() {
    return this.foodsService.todaysFoods;
  }

  get calorieCount() {
    return this.foodsService.todaysCalorieCount;
  }

}

import { Component, OnInit } from '@angular/core';
import foodList from '../foods';
import {Food} from '../shared/food.model'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods : Array<Food> = foodList;
  foodToCreate : Food = new Food();
  onClickDisplayForm : boolean = false;
  todayList : Food[] = []
  todayListCalories : number = 0;
  constructor() { }

  ngOnInit() {
  }

  onClickCreateFood(): void {
    this.foods.push(this.foodToCreate)
    this.foodToCreate = new Food()
    this.onClickDisplayForm = false;
  }

  onClickAddTodayList(item: Food): void{
    this.todayList.push(item)
    this.todayListCalories += item.calories; 
  }

}

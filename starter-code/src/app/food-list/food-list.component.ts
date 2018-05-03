import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  food: Array<object> = foods;
  todayList: Array<object> = []
  showTlist = false;

  constructor() { }

  ngOnInit() {
  }

  todayFood(x:object){
    this.todayList.push(x);
  }

  showTlii(){
    this.showTlist = !this.showTlist;
  }

}

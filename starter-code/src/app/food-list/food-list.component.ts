import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Array<Object>;
  newFood: Object = {};
  toggleForm: boolean = true;
  todayList: Array<Object> =[];


  constructor() { }

  ngOnInit() {
    this.foodList = foods;
  }

  addFood(newFood){
    this.foodList.push(newFood)
  }

  showForm(){
    this.toggleForm = !this.toggleForm
  }

  addToToday(e){
    this.todayList.push(e);
    console.log(e)
  }
}

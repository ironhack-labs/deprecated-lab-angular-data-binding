import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList: Array<Object> = [];
  newFood: Object = {};
  todayFoods: Array<String> = [];
  pattern: ''

  
  constructor() { 
    this.foodList = foods;
  }

  ngOnInit() {
  }


  divHide: boolean = false;

  toggleContent() {
      this.divHide = !this.divHide;
      console.log(this.divHide);
      // alert("hello");
  }

  addFood(){
    this.foodList.push(this.newFood);
    this.newFood = {};
  }
  
  addTodayFood(_food){
    this.todayFoods.push(_food);
    console.log(_food);
  }
  
  

}

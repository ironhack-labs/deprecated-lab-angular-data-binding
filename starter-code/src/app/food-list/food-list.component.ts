import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  show: boolean = false;
  todayFood: Object[];

  constructor(){}

  ngOnInit(){
    this.foods = foods;
  }

  addFood(){
    this.foods.push(this.newFood) ;
    this.newFood = "";
    this.toogleForm();
  }

  toogleForm(){
    this.show =!this.show;
  }

  addToday(){
  }

}

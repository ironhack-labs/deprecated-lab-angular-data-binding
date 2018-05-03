import { Component, OnInit } from '@angular/core';
import { foods, Food } from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  userInput : string;
  foodList : Array<Food> = foods;
  classState : any = {
    add : false
  }
  constructor() { }

  ngOnInit() {

  }

  addNewFood(){
    this.classState.add = !this.classState.add;
  }

  submitNewFood(){
    this.classState.add = !this.classState.add;
  }
}




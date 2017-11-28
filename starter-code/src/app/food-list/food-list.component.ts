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

  pattern: string;
  formActive: boolean;

  addListCal: Object[];
  NewAddListCal: object = {};

  SumTotal:number;

  constructor() { }

  ngOnInit() {
    this.addListCal = [];
    this.foods = foods;
    this.SumTotal=0;
    this.formActive = false;
  }
  activeFor(){

    if (this.formActive) {
      this.formActive = false;
    }else{
      this.formActive = true;
    }
  }
  addFood(){
    console.log("Add food has been called");
    console.log(this.newFood)
    this.foods.unshift(this.newFood);
    this.newFood = {};
  }
  addFoodList(e){
    //console.log(e);
    this.addListCal.push(e);
    this.SumTotal += e.calories;
    }


  // search(ev) {
  //       console.log(`Key inserted: ${ev.key}`);
  //
  // }

}

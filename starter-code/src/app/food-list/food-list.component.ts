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
  constructor() { }

  ngOnInit() {
    this.foods = foods;
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
    console.log("Add contact has been called");
    console.log(this.newFood)
    this.foods.unshift(this.newFood);
    this.newFood = {};
  }
  // search(ev) {
  //       console.log(`Key inserted: ${ev.key}`);
  //
  // }

}

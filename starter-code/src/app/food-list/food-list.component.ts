import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  
  foods: Array<Object> = foods
  newDish: Object = {};

  show: Boolean = false;
  

  constructor() { }

  ngOnInit() {
  }

  addDish(){
    foods.push(this.newDish);
    console.log("Add dish has been called");
    this.newDish={}

  }

  showForm() {
    this.show = !this.show
  }

}




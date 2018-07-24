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
  value:string;
  name:string;


  searchFunction(value){
    console.log(value);

    if(!value){
      return foods;
    }

    const myPattern = RegExp(value, 'i');
    return Object.keys(this.foods)
    .filter(key => this.foods[key].match(myPattern));
  }



  constructor() { }



  ngOnInit() {
    this.foods = foods;
  }

}

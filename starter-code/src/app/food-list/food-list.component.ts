import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods:Object[];
  newFood:Object={};
  // searchFood: string="";
  constructor() { }

  ngOnInit() {
    this.foods=foods;
  }

  newSearch(){
    console.log("AAAAAAAA");
    console.log("AAAAAAAA");
    console.log("AAAAAAAA");
    console.log("AAAAAAAA");
    console.log("AAAAAAAA");
    console.log("AAAAAAAA");
    
  }

  
}

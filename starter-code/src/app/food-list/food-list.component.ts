import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any>;
  searchedFoods:any[];
  listOfFoods:string="";
  newFood: Object = {};

  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.searchedFoods = foods;
  }

  searchFunction(){
    this.searchedFoods = this.foods.filter((foodsearch)=>{
      return foodsearch.name.toLowerCase().includes(this.listOfFoods.toLowerCase());
    })

}

}

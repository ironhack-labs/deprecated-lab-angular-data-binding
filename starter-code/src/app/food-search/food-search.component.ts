import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent implements OnInit {
  constructor() { }
  ngOnInit() {

  }
  
  
  // foodsArray:any = [];
  //   this.foodsArray = foods;
  
  // onKey(value) {
  //   let tempArray = [];
  //   this.foodsArray.forEach(food => {
  //     if(food.name.toLowerCase().includes(value.toLowerCase())) {
  //       console.log(food.name);
  //       tempArray.push(food);
  //     }
  //   });
  // }
}

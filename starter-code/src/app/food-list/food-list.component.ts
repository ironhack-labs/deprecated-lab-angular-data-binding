import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any>;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

filterFood(sItem) {
  console.log(sItem.value);
  const mySearch = new RegExp(sItem.value, 'i');
  this.foods = foods.filter(it => it.name.match(mySearch));
 
}


}

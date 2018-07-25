import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { AbstractFormGroupDirective } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
foods: Array<any>;
foods2: Array<any>;
todaysfoods: Array<any>;
newFood:any = {};

  constructor() { }

  ngOnInit() {
this.foods = foods;
this.todaysfoods = []
  }

  findFood(searchInput){
 this.foods2= foods.filter(function(afood){
return afood.name.toLowerCase().includes(searchInput.value.toLowerCase());
  })
  }

  addFood(){
    console.log(this.newFood);
    this.foods.unshift(this.newFood);
    this.newFood={};
  }

addToday(afood){
this.todaysfoods.unshift(afood)  ;
console.log(this.todaysfoods)
}

}

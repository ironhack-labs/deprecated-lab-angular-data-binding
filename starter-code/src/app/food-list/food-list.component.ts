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

formShowing:boolean =false;

  ngOnInit() {
this.foods = foods;
this.todaysfoods = []
  }

  findFood(searchInput){
 this.foods2= foods.filter(function(afood){
return afood.name.toLowerCase().includes(searchInput.value.toLowerCase());
  })
  }

toggleForm(){
  console.log(this.formShowing)
  this.formShowing=!this.formShowing
}
  addFood(){
    console.log(this.newFood);
    this.foods.unshift(this.newFood);
    this.newFood={};
  }

addToday(afood){
this.todaysfoods.unshift(afood);
}

}

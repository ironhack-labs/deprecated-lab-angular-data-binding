import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit  {
foods:Object[];
newFoods:object={};
show:boolean = false;

ngOnInit() {
  this.foods = foods;
}
addProduct(){
  console.log("Add contact has been called");
console.log(this.newFoods);
this.foods.push(this.newFoods);
this.newFoods = {};

}
toogleForm(){
  this.show = !this.show;
}
}


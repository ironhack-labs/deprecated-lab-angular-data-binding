import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  products : Array<object>
  pattern : string;
  newFood: Object = {};
  product: Object = {};
  myclasses: any = {
    form: true
  }
  list: Array<object>=[]
  totalCalories: number=0
  
 
  constructor() { }

  ngOnInit() {
    this.products = foods
  }



addFood(){
  console.log("Add contact has been called");
  this.products.push(this.newFood)
  this.newFood = {}
  this.myclasses.form = !this.myclasses.form
}

addToList(product, q){
  if(!this.list.some(e=> e['name'] === product.name)) this.list.push(product)
  product.quantity += parseInt(q);
  this.totalCalories = product.calories * product.quantity;
}


}
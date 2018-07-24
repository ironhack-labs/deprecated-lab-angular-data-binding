import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods:any
  formstyle = {
    display:"none"
  }

  
  constructor() { 
    this.foods = foods
  }

  ngOnInit() {

  }
  showForm(){
    if(this.formstyle.display=="none")
    this.formstyle.display="block"
    else
    this.formstyle.display="none"
  }
  addFood(name,calories,image){
    this.foods.push({
      name,calories,image,quantity:1
    })
  }

  addQuantity(food){
    this.foods[this.foods.indexOf(food)].quantity++
    //console.log(this.foods)
  }
//| filter : 'name' : search
}

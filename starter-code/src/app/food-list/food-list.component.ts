import { Component, OnInit } from '@angular/core';
import foods from '../foods';





@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  lookforname : string;
  newFood:any={};
  visible:boolean=true;
  arrFood: Array<string>=[]
  constructor() { };
  

  ngOnInit() {
    this.foods= foods
  }
 //style="display: none;"

  addFood(name,calories,img,qty){
    //this.newFood={}
    this.newFood.name=name
    this.newFood.calories=calories
    this.newFood.image=img
    this.newFood.quantity=qty
    this.foods.push(this.newFood)
    console.log(this.foods)
    console.log(this.newFood.name)

    this.newFood = {}


  }
  visiToggle(){
    console.log(this.visible)
  return  this.visible=!this.visible
  }
  addToday(name){
    console.log(name)
    this.arrFood.push(name.name)
  }
}

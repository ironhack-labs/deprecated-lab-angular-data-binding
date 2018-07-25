import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
    foods : Object = []
    newFood:Object = {}
    todayFood: Object = []
    show = false
  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  access(){
    this.show = true
    console.log(this.show)
  }


  addFood(){
    console.log("Add food has been called");
    let newObj:{} = {
      name: this.newFood.name,
      calories:this.newFood.calories,
      image:this.newFood.image,
      quantity:this.newFood.quantity
    }
    this.foods.push(newObj)

    this.newFood.name = ''
    this.newFood.calories = ''
    this.newFood.image = ''
    this.newFood.quantity = ''
 
  }

  today(){
    this.todayFood.push(this.newObj.name)
    console.log(this.newObj)
  }



}




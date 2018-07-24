import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  chosen: Array<string> = [];
  calories:number=0;
  isHidden:boolean = false;
  todayFoods: any[] = []
  toggleHidden(){
    this.isHidden = !this.isHidden;
  }

  addFood(a,b,c){
    console.log("Add food has been called");
    let newFood = {name: a.value, calories: b.value, image: c.value, quantity:0}
    this.foods.push(newFood);
    a.value ="";
    b.value ="";
    c.value ="";
  }

  addToday(food,n){
    // if(!this.chosen.includes("i")){
    //   this.chosen.push(i)
    // }
    console.log("Add today has been called");
    food.quantity += Number(n.value);
    let bus = this.todayFoods.filter(e => e.name ==food.name)
    if( bus.length == 0){
      this.todayFoods.push(food);
      this.calories += food.calories*food.quantity;
    } else{
      food.calories*n.value
      this.calories += food.calories*food.quantity
    }
    
  }
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

}

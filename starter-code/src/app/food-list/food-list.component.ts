import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  pattern: string;
  invisible: boolean;
  listFood: Object[];
  dailyCalories: number;
  constructor() {
    this.invisible = true;
   }

  ngOnInit() {
    this.foods = foods;
    this.listFood = [];
    this.dailyCalories = 0;
  }
show(){
if(this.invisible){
  this.invisible = false
}else{
  this.invisible = true;
}
}
addFood(name,calories, image){
  this.foods.unshift({
    name,
    calories,
    image
  });
 this.show()
}
addList(f, quantity){
  f.quantity += parseInt(quantity);
  if(this.listFood.indexOf(f)=== -1){
    if(this.dailyCalories = 0){
      this.dailyCalories = (f.calories * f.quantity);
    }else{
      this.dailyCalories += (f.calories * f.quantity);
    }
    this.listFood.push(f);
  }else{
    this.dailyCalories += (f.calories * f.quantity);
  }
}

}

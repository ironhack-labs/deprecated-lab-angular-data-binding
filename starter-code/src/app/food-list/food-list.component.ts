import { Component, OnInit } from '@angular/core';
import comidas from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  


  constructor() { }

foods: Object[] = comidas;

show: Boolean = false;

nuevaComida: Object = {};

todayList = [];

totalCalories: Number = 0;




addToday(food){
  if(this.todayList.find(f=> f.name === food.name)){
    food.quantity++; // le suma uno a la cantidad del alimento
  } else {
    food.quantity = 1;
    this.todayList.push(food); // mete a la lista de todays list
  }
this.totalCalories += food.calories;
}


addFood(){
this.show = true;
// this.foods.unshift(this.nuevaComida)
// console.log(this.foods)
}

pushtoFoods(){
  this.foods.unshift(this.nuevaComida);
  this.show = false;
}



  ngOnInit() {
  }

}

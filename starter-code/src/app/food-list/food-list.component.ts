import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foods : Object[];
  newFood : Object = {};
  //agregar para mostrar o quitar
  show : boolean = true;
  //siempre inicializar si es que se busca hacer una función
  todayMeal:Object[] = [];
  totalCalories : number;


  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(food){
    this.show = !this.show;
    this.foods.push(this.newFood);
  }
  showForm(){
    this.show = !this.show;
  }

  addMeal(food){
    this.todayMeal.push(food);
    console.log(this.todayMeal);
  }
  sumCalories(todayMeal){
    var total = 0;
    for (let i = 0; i < todayMeal.length ; i++ ){
      let x = todayMeal[i].calories;
      total += x;
    }
    return total;
  }
}

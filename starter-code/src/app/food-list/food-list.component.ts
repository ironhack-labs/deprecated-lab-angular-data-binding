import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods:Array<Object>;
  name:string;
  calories:string;
  image:string;
  quantity:string;
  show: Boolean = false;
  totalCalorias: number;
  todaysFoods:Array<Object>;


  constructor() { }
  
  ngOnInit() {
    this.foods = foods;
    this.todaysFoods = [] 
    this.totalCalorias = 1;
  }
  addNewFood(){    
     var food = {
      name: this.name,
      calories: this.calories,
      image: this.image,
      quantity: this.quantity
     }
     

      this.foods.push(food)
       

      console.log(this.name)
      /* image: this.image,
      quantity: this.quantity, */
  }

  toogle(){
   this.show ? (this.show = false):(this.show=true)
  }

  todaysFood(e, quantity){
    var todaysFood = {
      name: e.name,
      calories: e.calories,
      image: e.image,
      quantity: e.quantity
     }
     this.todaysFoods.push(todaysFood)
     this.totalCalorias += e.calories*quantity;
  }
}

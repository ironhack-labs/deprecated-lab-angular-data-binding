import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  quantity: number=1;
  isVis: boolean = true;
  food: any ={

  }
  
  foods: Array<Object> = foods;
  newFood: {
    name: string,
    calories: number,
    image: string,
    quantity: number
};

  specialFoods: Array<Object> =[];
  filtrado: Array<Object> =[{}];
  totalCalories:number = 0;
  
  constructor() { 
  }
  displayForm(){
    this.isVis = !this.isVis;
  }
  addNewFood(){

    this.foods.push(this.food)
    this.food = {};
  }
  addSpecialFood(food, quantity){
    this.totalCalories += food.calories*quantity;
    this.newFood = {
      name: food.name,
      calories: parseInt(food.calories)*parseInt(quantity),
      image: food.image,
      quantity: parseInt(quantity), 
    }
    this.filtrado = this.specialFoods.filter((e)=>{
      return e["name"] === food.name;
    })

    if (this.filtrado.length === 0){
      this.specialFoods.push(this.newFood);

    }
    else{
      this.specialFoods.map((e)=>{
        if (e["name"] === food.name) {
          e["quantity"] += this.newFood.quantity;
          e["calories"] += this.newFood.calories;

        }
        return e;
      })
    }
    


  }
  ngOnInit() {
  }

}

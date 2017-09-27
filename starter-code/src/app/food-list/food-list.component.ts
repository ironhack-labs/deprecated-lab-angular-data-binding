import { Component, OnInit } from '@angular/core'
import foods from '../foods'

interface foodObj{
  name:string
  image:string
  calories:number
  quantity:number
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: foodObj[]
  newFood: foodObj = {name:'', image:'', calories:null, quantity:null}
  isFoodFormHidden: boolean = true
  todaysFoods: foodObj[] = []
  totalCalories:number = 0
  elementQuantity:number = 0

  constructor() {
    this.foods = foods

    for(var i=0; i<this.foods.length; i++){
      this.foods.forEach(f => f.quantity = 1)
    }
  }

  ngOnInit() {
  }

  showFoodForm(){
    this.isFoodFormHidden = !this.isFoodFormHidden
  }

  addFood(){
    console.log(this.newFood)
    this.foods.push(this.newFood)
    this.isFoodFormHidden = !this.isFoodFormHidden
    this.newFood = {name:'', image:'', calories:null, quantity:null}

  }

  addToTodaysFoods(food){
    this.totalCalories = 0

    if(this.todaysFoods.length == 0){
      this.todaysFoods.push(food)
      this.totalCalories+= (food.calories * food.quantity)
    }
    else {
      for(let i=0; i<this.todaysFoods.length; i++){
        if (this.todaysFoods[i].name == food.name){
          this.todaysFoods[i].quantity = food.quantity
          this.totalCalories+= (this.todaysFoods[i].calories * this.todaysFoods[i].quantity)
        }
        else{
          this.todaysFoods.push(food)
          this.totalCalories+= (this.todaysFoods[i].calories * food.quantity)
        }
      }
    }
  }
}

import { Component, OnInit } from '@angular/core'
import foods from '../foods'

interface foodObj{
  name:string;
  image:string;
  calories:number;
  quantity:number;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[]
  newFood: Object = {}
  isFoodFormHidden: boolean = true
  todaysFoods: foodObj[] = []
  totalCalories:number = 0

  constructor() {
    this.foods = foods
  }

  ngOnInit() {
  }

  showFoodForm(){
    this.isFoodFormHidden = !this.isFoodFormHidden
  }

  addFood(){
    this.foods.push(this.newFood)
    this.newFood = {}
    this.isFoodFormHidden = !this.isFoodFormHidden;
  }

  addToTodaysFoods(food){
    console.log(food)
    this.todaysFoods.push(food)

    this.totalCalories = 0
    for(let i=0; i<this.todaysFoods.length; i++){
      this.totalCalories+=this.todaysFoods[i].calories
    }
  }

}

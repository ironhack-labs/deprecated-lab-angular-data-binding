import { Component, OnInit } from '@angular/core'
import foods from '../foods'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[]
  newFood: Object = {}
  isFoodFormHidden: boolean = true
  todaysFoods: Object[] = []

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
  }

}

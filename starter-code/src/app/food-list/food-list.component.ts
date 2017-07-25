import { Component, OnInit } from '@angular/core'
import foods from '../foods'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[]
  newFoods: Object = {}
  todayFoods: Object[] = []
  newFoodToday: Object = {}
  createFood: boolean = false
  totalCalories: Number = 0

  constructor() { }

  ngOnInit() {
  this.foods = foods
  }

  showForm() {
    this.createFood = !this.createFood
  }

  addFoodToList(food) {
    this.todayFoods.push(food)
    this.calculateCalories(this.todayFoods)
  }

  calculateCalories(todayFoods) {
    let counter = 0
    for (let i = 0; i < this.todayFoods.length; i++) {
      let cal = todayFoods[i].calories
      counter += cal
    }
    this.totalCalories = counter
    return counter
  }

}

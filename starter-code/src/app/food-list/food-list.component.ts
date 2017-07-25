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
  totalQuantity: Number = 1

  constructor() { }

  ngOnInit() {
  this.foods = foods
  }

  showForm() {
    this.createFood = !this.createFood
  }

  addFoodToList(food) {
    this.todayFoods.push(food)
    this.calculateQuantity(food.quantity)
  }

  calculateQuantity(foodQuantity) {

  }

}

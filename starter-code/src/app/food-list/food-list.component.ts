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
  todayFoods: Object[]
  newFoodToday: Object = {}
  createFood: boolean = false

  constructor() { }

  ngOnInit() {
  this.foods = foods
  }

  showForm() {
    this.createFood = !this.createFood
  }

  addFood() {
    this.foods.push(this.newFoods)
    this.newFoods = {}
  }

  addFoodToList() {
    this.todayFoods.push(this.newFoodToday)
    console.log(this.newFoodToday)
    this.newFoodToday = {}
  }

}

import { Component, OnInit } from '@angular/core'
import foods from '../foods'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[]
  newFoods: Object = {
  quantity: 0
  }
  todayFoods: any[] = [];
  newFoodToday: Object = {}
  createFood: boolean = false
  totalCalories: Number = 0
  todayFoodsNames: Array<string> = []

  constructor() { }

  ngOnInit() {
  this.foods = foods
  }

  showForm() {
    this.createFood = !this.createFood
  }

  addFoodToList(food) {
    // for(let i = 0; i < this.todayFoods.length; i++) {
    //   if (food.name == this.todayFoods[i].name) {
    //     this.todayFoods[i].quantity++
    //   } else {
    //     this.todayFoods.push(food)
    //   }
    // }
    if(this.todayFoodsNames.indexOf(food.name) !== -1) {
      this.todayFoods[this.todayFoodsNames.indexOf(food.name)].quantity++;
    } else {
      food.quantity++;
      this.todayFoods.push(food)
      this.todayFoodsNames.push(food.name)
    }
    this.totalCalories = this.calculateCalories(this.todayFoods);
  }

  calculateCalories(todayFoods) {
    let counter = 0
    for (let i = 0; i < this.todayFoods.length; i++) {
      let cal = todayFoods[i].calories * todayFoods[i].quantity;
      counter += cal
    }
    this.totalCalories = counter
    return counter;
  }

}

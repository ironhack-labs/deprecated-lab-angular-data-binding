import {
  Component,
  OnInit
} from '@angular/core';
import foodsList from '../../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  todaysFoods: Object[];
  todaysTotalCalories: number;
  newFood: Object = {};
  isAddFoodShown: boolean = false;

  constructor() {}

  ngOnInit() {
    this.foods = foodsList;
    this.todaysFoods = [];
    this.todaysTotalCalories = 0;
  }

  toggleAddFood() {
    this.isAddFoodShown = !this.isAddFoodShown;
  }

  addFood() {
    this.foods.push({
      name: this.newFood["name"],
      calories: this.newFood["calories"],
      quantity: this.newFood["quantity"],
      image: this.newFood["image"],
    });
    this.isAddFoodShown = false;
  }

  addTodaysFood(food, quantity) {
    console.log(quantity);
    this.todaysFoods.push({
      name: food.name,
      calories: (food.calories * quantity),
      totalQuantity: quantity,
      image: food.image,
    });

    this.todaysTotalCalories += (food.calories * quantity);
  }

}

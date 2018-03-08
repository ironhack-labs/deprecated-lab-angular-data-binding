import {
  Component,
  OnInit
} from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  todaySpecials: Object[] = new Array();
  newFood: Object = {};
  searchFood: string = "";
  htmlToAdd: string = "";
  calories: number = 0;
  constructor() {}

  ngOnInit() {
    this.foods = foods;
  }

  newSearch() {
    this.foods = foods;
    this.foods = this.foods.filter((food) => {
      return food["name"].includes(this.searchFood);
    });
  }

  addFood() {
    let isNewFood: Boolean = true;
    this.foods.forEach(food => {
      let arrName: Array < String > = food["name"].split("+");
      if (this.newFood["name"] === arrName[0]) {
        if (arrName.length === 1) {
          food["name"] += "+1"
        } else {
          let quantity: Number = Number(arrName[1]) + 1;
          food["name"] = arrName[0] +"+"+ quantity.toString();
        }
        isNewFood = false;
      }
    });
    if (isNewFood)
      this.foods.push(this.newFood);
  }

  addTodaySpecials(food) {
    let isNotRepeat: Boolean = true;
    this.todaySpecials.forEach(special => {
      if (special["name"] === food["name"]) {
        isNotRepeat = false;
      }
    });
    if (isNotRepeat) {
      this.calories += food.calories;
      this.todaySpecials.push(food);
    }
  }

  addQuantity(quantity, food) {
    this.foods.forEach(currentFood => {
      if (food.name === currentFood["name"]) {
        currentFood["quantity"] += Number(quantity);
      }
    });
  }

}

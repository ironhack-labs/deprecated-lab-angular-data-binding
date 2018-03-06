import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
    foods: Object[];
    newFood: Object = {};

    display: boolean = false;       //this controls the *newFood* form visualization
    displayList: boolean = false;       //this controls the *todayList* section visualization

    todayList: String[] = [];
    totalCalories: Number = 0;

  constructor() { }

      ngOnInit() {
        this.foods = foods;
      }

      showForm() {
          this.display = !this.display;
      }

      addFood() {
        if(Object.keys(this.newFood).length === 0) {
            this.display = false;
        } else {
            this.foods.push(this.newFood);
            this.newFood = {};
            this.display = false;
        }
      }

      addToTodayList(name, cal) {
          this.totalCalories += cal;
          this.todayList.push(name);

          if(this.totalCalories != 0) {
              this.displayList = true;
          }
      }
}

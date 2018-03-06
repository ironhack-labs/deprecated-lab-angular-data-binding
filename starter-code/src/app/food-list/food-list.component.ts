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
    totalCalories: number = 0;

    value: number = 1;
    numberOfItems: number = 1;

  constructor() { }

      ngOnInit(): void {
        this.foods = foods;
      }

      showForm(): void {
          this.display = !this.display;
      }

      addFood(): void {
        if(Object.keys(this.newFood).length === 0) {
            this.display = false;
        } else {
            this.foods.push(this.newFood);
            this.newFood = {};
            this.display = false;
        }
      }

      addToTodayList(name, cal): void {
          this.numberOfItems = this.value;
          this.totalCalories += cal * this.numberOfItems;
          this.todayList.push(name);

          if(this.totalCalories != 0) {
              this.displayList = true;
          }

          this.value = 1;
      }
}

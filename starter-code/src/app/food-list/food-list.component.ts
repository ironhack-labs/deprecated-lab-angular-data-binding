import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodsList: Array<any> = [];

  ngOnInit() {
    foods.forEach((food) => {
      this.foodsList.push(food);
    });
    console.log(this.foodsList);
  }

}

import { Component, OnInit } from '@angular/core';
import foods from '../../../shared/data/foods';
import { Food } from '../../models/food.model'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foodList: Array<Food> = foods;
}

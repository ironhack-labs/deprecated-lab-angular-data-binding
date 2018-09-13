import { Component, OnInit } from '@angular/core';
import {Food} from './../../shared/models/food.model';
import foodData from './../../shared/data/foods.data';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent{
foods: Array<Food> = foodData;
}

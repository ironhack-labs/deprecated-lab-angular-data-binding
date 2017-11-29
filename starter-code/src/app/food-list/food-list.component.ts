import { Component, OnInit } from '@angular/core';
import foods from '../data/foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods = foods;
  terms = '';
  constructor() {}

  ngOnInit() {}
}

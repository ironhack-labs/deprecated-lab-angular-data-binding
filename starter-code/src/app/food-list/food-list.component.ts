import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
	foods: Array<Object> = foodList
  constructor() { }

  ngOnInit() {
  }

}

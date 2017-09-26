import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
	isClicked: boolean = false
	foods: Array<Object> = foodList
	newFood: Object = {}
  constructor() { }

  ngOnInit() {
  }

	isClickedForm() {
		this.isClicked = !this.isClicked
	}

	addFood(){
		this.foods.push(this.newFood)
		this.newFood = '';
	}

}

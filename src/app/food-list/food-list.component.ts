import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  newMenu: Object [];
  isActive: boolean = true;
  isSelected: boolean = true;

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  addFood(){
    this.foods.push(this.newFood);
  }

  toggleForm(){
    this.isActive = !this.isActive;
  }

  // addToMenu(){
  //   this.foods.push(this.newMenu);
  // }
  //
  // toggleSelect(){
  //   this.isSelected = !this.isSelected;
  // }

}

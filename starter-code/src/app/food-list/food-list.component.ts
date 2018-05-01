import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  pattern: string;
  noVisible: boolean;

  constructor() {
    this.noVisible = true;
   }

  ngOnInit() {
    this.foods = foods;
  }

  showForm() {
    if( this.noVisible ) {
      this.noVisible = false;
    } else {
      this.noVisible = true;
    }
  }

  addFood($event, name, email, image) {
    this.foods.unshift({
      name,
      email,
      image
    })
  }

}

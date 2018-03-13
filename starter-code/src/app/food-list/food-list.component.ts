import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  isActive: boolean;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addNewFood(): void{
    this.isActive = !this.isActive;
    console.log('add food');
  }
}

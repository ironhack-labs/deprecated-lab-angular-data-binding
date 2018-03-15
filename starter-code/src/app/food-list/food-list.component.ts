import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  isActive: boolean;
  pattern: string;

  @Output() selectFood = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addNewFood(): void{
    this.isActive = !this.isActive;
  }

  addTodayList(food): void{
    this.selectFood.emit(food);   
  }
}

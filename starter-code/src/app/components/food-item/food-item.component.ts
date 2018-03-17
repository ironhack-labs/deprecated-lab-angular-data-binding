import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input() food: any;
  @Output() addFood = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.food.quantity = 1;
  }

  onAddFood() {
    this.addFood.emit(this.food);
  }

}

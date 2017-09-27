import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input() foods: Object[];
  @Output() onNewFood = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  handleAddClick(food) {
    this.onNewFood.emit(food);
  }

}

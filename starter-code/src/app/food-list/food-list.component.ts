import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  @Input() foods: Object[]

  @Output() onNewTodaysFood = new EventEmitter<Object>();

  //TODO output
  addToTodaysFood(food) {
    console.log(food)
    this.onNewTodaysFood.emit(food)
  }

  constructor() { }

  ngOnInit() {
  }

}

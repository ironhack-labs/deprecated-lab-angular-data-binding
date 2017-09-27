import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {
  @Output() onNewFood = new EventEmitter<Object>();
  newFood: Object = {};
  showAdd = true;

  constructor() { }

  ngOnInit() {
  }

  handleSubmitClick() {
    this.onNewFood.emit(this.newFood);
  }

  hideFood() {
    this.showAdd = false;
  }

}

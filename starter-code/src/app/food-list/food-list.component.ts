import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {

  foods: Object[];
  show:boolean = false;

  constructor() {}

  ngOnInit() {
    this.foods = foods;
  }

  openForm() {
    if(this.show === true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  addFood() {
    // console.log(this.name);
    // this.foods.push();
    // this.name = "";
  }



}

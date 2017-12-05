import { Component, OnInit } from '@angular/core';
import foods  from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  listOfFoods: any[] = foods;

  constructor() { }

  ngOnInit() {
  }

  addMyList() {
      var index = this.listOfFoods.map(
          function(oneFood) {return oneFood.name; })
          .indexOf('oneFood.name');
      console.log(index);
  }

}

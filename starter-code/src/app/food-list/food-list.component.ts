import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})


export class FoodListComponent implements OnInit {
  foodsListed: Object[];

  image: '';
  name: '';
  calories: number ;
constructor() { }

  ngOnInit() {
    this.foodsListed = foodsList;

  }

}

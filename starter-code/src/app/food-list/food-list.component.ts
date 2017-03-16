import { Component, OnInit } from '@angular/core';
import { SearchPipe } from '../pipes/search.pipe'
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  
  searchTerm: string;

  myFoods: Array<any> = foods;

  constructor() { }

  ngOnInit() {
  }

}

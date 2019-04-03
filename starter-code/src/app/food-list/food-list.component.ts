import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  listFood:Array<object>
  search:string 
  constructor() { 
    this.listFood = foods;
    this.search = ""
  }
  showForm(){
    
  }

}

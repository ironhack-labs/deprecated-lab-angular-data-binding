import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  pattern:string;
  showForm:boolean = false;
  constructor() { 
   
  }

  ngOnInit() {
    this.foods = foods;
  }
  toggleForm(){
    this.showForm = !this.showForm;
  }
  addFood(){
    foods.push(this.newFood)
  }
}

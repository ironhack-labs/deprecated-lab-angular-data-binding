import { Component, OnInit } from '@angular/core';
import foods from '../../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];


  constructor( ) { }

  newFood = {
    image: '',
    name: '',
    calories: ''
  }

  visibleForm = false;

  ngOnInit() {
    this.foods = foods;
  }

  addFood(){
    this.foods.push(this.newFood);
    this.newFood = {
      image: '',
      name: '',
      calories: ''
    }
  }

  showForm(){
    this.visibleForm = !this.visibleForm;
  }
}

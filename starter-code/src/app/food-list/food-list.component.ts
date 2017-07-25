import { Component, OnInit } from '@angular/core';
import foods from '../foods';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  foods : Object[];
  newFood : Object = {};
  //agregar para mostrar o quitar
  show : boolean = true;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(food){
    this.show = !this.show;
    this.foods.push(this.newFood);
  }
  showForm(){
    this.show = !this.show;
  }
}
